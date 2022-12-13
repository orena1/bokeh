import {LineVector, FillVector, HatchVector} from "core/property_mixins"
import {FloatArray, ScreenArray} from "core/types"
import * as visuals from "core/visuals"
import {Context2d} from "core/util/canvas"
import {SpatialIndex} from "core/util/spatial"
import {map} from "core/util/arrayable"
import {Glyph, GlyphView, GlyphData} from "./glyph"
import * as p from "core/properties"

export type HBandData = GlyphData & p.UniformsOf<HBand.Mixins> & {
  _y0: FloatArray
  _y1: FloatArray

  sy0: ScreenArray
  sy1: ScreenArray
}

export interface HBandView extends HBandData {}

export class HBandView extends GlyphView {
  declare model: HBand
  declare visuals: HBand.Visuals

  /** @internal */
  declare glglyph?: import("./webgl/lrtb").LRTBGL

  override async lazy_initialize(): Promise<void> {
    await super.lazy_initialize()

    const {webgl} = this.renderer.plot_view.canvas_view
    if (webgl != null && webgl.regl_wrapper.has_webgl) {
      const {LRTBGL} = await import("./webgl/lrtb")
      this.glglyph = new LRTBGL(webgl.regl_wrapper, this)
    }
  }

  get sleft(): ScreenArray {
    const {left} = this.renderer.plot_view.frame.bbox
    const n = this.data_size
    const sleft = new ScreenArray(n)
    sleft.fill(left)
    return sleft
  }

  get sright(): ScreenArray {
    const {right} = this.renderer.plot_view.frame.bbox
    const n = this.data_size
    const sright = new ScreenArray(n)
    sright.fill(right)
    return sright
  }

  get stop(): ScreenArray {
    return this.sy0
  }

  get sbottom(): ScreenArray {
    return this.sy1
  }

  override get _index_size(): number {
    return 0
  }

  protected _index_data(_index: SpatialIndex): void {}

  protected override _map_data(): void {
    super._map_data()
    const {round} = Math
    this.sy0 = map(this.sy0, (yi) => round(yi))
    this.sy1 = map(this.sy1, (yi) => round(yi))
  }

  scenterxy(i: number): [number, number] {
    const {hcenter} = this.renderer.plot_view.frame.bbox
    return [hcenter, (this.sy0[i] + this.sy1[i])/2]
  }

  protected _render(ctx: Context2d, indices: number[], data?: HBandData): void {
    const {sy0, sy1} = data ?? this
    const {left, right, width} = this.renderer.plot_view.frame.bbox

    for (const i of indices) {
      const sy0_i = sy0[i]
      const sy1_i = sy1[i]

      if (!isFinite(sy0_i + sy1_i))
        continue

      ctx.beginPath()
      ctx.rect(left, sy0_i, width, sy1_i - sy0_i)

      this.visuals.fill.apply(ctx, i)
      this.visuals.hatch.apply(ctx, i)

      ctx.beginPath()
      ctx.moveTo(left, sy0_i)
      ctx.lineTo(right, sy0_i)
      ctx.moveTo(left, sy1_i)
      ctx.lineTo(right, sy1_i)

      this.visuals.line.apply(ctx, i)
    }
  }
}

export namespace HBand {
  export type Attrs = p.AttrsOf<Props>

  export type Props = Glyph.Props & {
    y0: p.CoordinateSpec
    y1: p.CoordinateSpec
  } & Mixins

  export type Mixins = LineVector & FillVector & HatchVector

  export type Visuals = Glyph.Visuals & {line: visuals.LineVector, fill: visuals.FillVector, hatch: visuals.HatchVector}
}

export interface HBand extends HBand.Attrs {}

export class HBand extends Glyph {
  declare properties: HBand.Props
  declare __view_type__: HBandView

  constructor(attrs?: Partial<HBand.Attrs>) {
    super(attrs)
  }

  static {
    this.prototype.default_view = HBandView

    this.mixins<HBand.Mixins>([LineVector, FillVector, HatchVector])

    this.define<HBand.Props>(() => ({
      y0: [ p.YCoordinateSpec, {field: "y0"} ],
      y1: [ p.YCoordinateSpec, {field: "y1"} ],
    }))
  }
}
