import {UIElement, UIElementView} from "../ui/ui_element"
import {Tool} from "./tool"
import {ToolProxy} from "./tool_proxy"
import {div, StyleSheetLike, MouseButton} from "core/dom"
import {ToolIcon} from "core/enums"
import {ContextMenu} from "core/util/menus"
import {reversed} from "core/util/array"
import {Signal0} from "core/signaling"
import * as p from "core/properties"

import tool_button_css, * as tool_button from "styles/tool_button.css"
import icons_css from "styles/icons.css"

import type {ToolbarView} from "./toolbar"

export abstract class ToolButtonView extends UIElementView {
  declare model: ToolButton
  declare readonly parent: ToolbarView

  private _menu: ContextMenu

  override initialize(): void {
    super.initialize()

    const {location} = this.parent.model
    const reverse = location == "left" || location == "above"
    const orientation = this.parent.model.horizontal ? "vertical" : "horizontal"
    const items = this.model.tool.menu ?? []
    this._menu = new ContextMenu(!reverse ? items : reversed(items), {
      target: this.root.el,
      orientation,
      prevent_hide: (event) => event.composedPath().includes(this.el),
    })

    const duration = 250 /*ms*/
    let start: number | null = null
    let timer: number | null = null

    this.el.addEventListener("pointerdown", (e) => {
      if (e.buttons == MouseButton.Left) {
        start = e.timeStamp
        timer = setTimeout(() => {
          start = null
          timer = null
          this._pressed()
        }, duration)
      }
    })

    this.el.addEventListener("pointerup", (e) => {
      if (timer != null) {
        clearTimeout(timer)
        timer = null
      }

      if (start != null) {
        const end = e.timeStamp
        if (end - start >= duration) {
          this._pressed()
        } else {
          if (this._menu.is_open) {
            this._menu.hide()
            return
          }
          if (e.composedPath().includes(this.el)) {
            this._clicked()
          }
        }
        start = null
      }
    })

    this.el.addEventListener("keydown", (event) => {
      if (event.key == "Enter") {
        this._clicked()
      }
    })
  }

  override connect_signals(): void {
    super.connect_signals()
    this.connect(this.model.change, () => this.render())
    this.connect(this.model.tool.change as Signal0<Tool>, () => this.render())
  }

  override remove(): void {
    this._menu.remove()
    super.remove()
  }

  override styles(): StyleSheetLike[] {
    return [...super.styles(), tool_button_css, icons_css]
  }

  override render(): void {
    super.render()

    this.class_list.add(tool_button[this.parent.model.location])
    if (this.model.tool.disabled)
      this.class_list.add(tool_button.disabled)

    const icon_el = div({class: tool_button.tool_icon})
    this.shadow_el.appendChild(icon_el)

    const icon = this.model.icon ?? this.model.tool.computed_icon
    if (icon != null) {
      if (icon.startsWith("data:image")) {
        const url = `url("${encodeURI(icon)}")`
        icon_el.style.backgroundImage = url
      } else if (icon.startsWith("--")) {
        icon_el.style.backgroundImage = `var(${icon})`
      } else if (icon.startsWith(".")) {
        const cls = icon.substring(1)
        icon_el.classList.add(cls)
      } else if (ToolIcon.valid(icon)) {
        const cls = `bk-tool-icon-${icon.replace(/_/g, "-")}`
        icon_el.classList.add(cls)
      }
    }

    if (this.model.tool.menu != null) {
      const chevron_el = div({class: tool_button.tool_chevron})
      this.shadow_el.appendChild(chevron_el)
    }

    const tooltip = this.model.tooltip ?? this.model.tool.tooltip
    this.el.title = tooltip

    this.el.tabIndex = 0
  }

  protected abstract _clicked(): void

  protected _pressed(): void {
    const at = (() => {
      switch (this.parent.model.location) {
        case "right": return {left_of:  this.el}
        case "left":  return {right_of: this.el}
        case "above": return {below: this.el}
        case "below": return {above: this.el}
      }
    })()
    this._menu.toggle(at)
  }
}

export namespace ToolButton {
  export type Attrs = p.AttrsOf<Props>

  export type Props = UIElement.Props & {
    tool: p.Property<Tool | ToolProxy<Tool>>
    icon: p.Property<ToolIcon | string | null>
    tooltip: p.Property<string | null>
  }
}

export interface ToolButton extends ToolButton.Attrs {}

export abstract class ToolButton extends UIElement {
  declare properties: ToolButton.Props
  declare __view_type__: ToolButtonView

  constructor(attrs?: Partial<ToolButton.Attrs>) {
    super(attrs)
  }

  static {
    this.define<ToolButton.Props>(({String, Regex, Ref, Nullable, Or}) => ({
      tool: [ Or(Ref(Tool), Ref(ToolProxy)) ],
      icon: [ Nullable(Or(ToolIcon, Regex(/^--/), Regex(/^\./), Regex(/^data:image/))), null ],
      tooltip: [ Nullable(String), null ],
    }))
  }
}
