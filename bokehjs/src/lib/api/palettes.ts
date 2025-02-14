import {Color} from "core/types"
import {linspace} from "core/util/array"
import {color2hex, color2rgba} from "core/util/color"

export const YlGn3       = [0x31a354ff, 0xaddd8eff, 0xf7fcb9ff]
export const YlGn4       = [0x238443ff, 0x78c679ff, 0xc2e699ff, 0xffffccff]
export const YlGn5       = [0x006837ff, 0x31a354ff, 0x78c679ff, 0xc2e699ff, 0xffffccff]
export const YlGn6       = [0x006837ff, 0x31a354ff, 0x78c679ff, 0xaddd8eff, 0xd9f0a3ff, 0xffffccff]
export const YlGn7       = [0x005a32ff, 0x238443ff, 0x41ab5dff, 0x78c679ff, 0xaddd8eff, 0xd9f0a3ff, 0xffffccff]
export const YlGn8       = [0x005a32ff, 0x238443ff, 0x41ab5dff, 0x78c679ff, 0xaddd8eff, 0xd9f0a3ff, 0xf7fcb9ff, 0xffffe5ff]
export const YlGn9       = [0x004529ff, 0x006837ff, 0x238443ff, 0x41ab5dff, 0x78c679ff, 0xaddd8eff, 0xd9f0a3ff, 0xf7fcb9ff, 0xffffe5ff]

export const YlGnBu3     = [0x2c7fb8ff, 0x7fcdbbff, 0xedf8b1ff]
export const YlGnBu4     = [0x225ea8ff, 0x41b6c4ff, 0xa1dab4ff, 0xffffccff]
export const YlGnBu5     = [0x253494ff, 0x2c7fb8ff, 0x41b6c4ff, 0xa1dab4ff, 0xffffccff]
export const YlGnBu6     = [0x253494ff, 0x2c7fb8ff, 0x41b6c4ff, 0x7fcdbbff, 0xc7e9b4ff, 0xffffccff]
export const YlGnBu7     = [0x0c2c84ff, 0x225ea8ff, 0x1d91c0ff, 0x41b6c4ff, 0x7fcdbbff, 0xc7e9b4ff, 0xffffccff]
export const YlGnBu8     = [0x0c2c84ff, 0x225ea8ff, 0x1d91c0ff, 0x41b6c4ff, 0x7fcdbbff, 0xc7e9b4ff, 0xedf8b1ff, 0xffffd9ff]
export const YlGnBu9     = [0x081d58ff, 0x253494ff, 0x225ea8ff, 0x1d91c0ff, 0x41b6c4ff, 0x7fcdbbff, 0xc7e9b4ff, 0xedf8b1ff, 0xffffd9ff]

export const GnBu3       = [0x43a2caff, 0xa8ddb5ff, 0xe0f3dbff]
export const GnBu4       = [0x2b8cbeff, 0x7bccc4ff, 0xbae4bcff, 0xf0f9e8ff]
export const GnBu5       = [0x0868acff, 0x43a2caff, 0x7bccc4ff, 0xbae4bcff, 0xf0f9e8ff]
export const GnBu6       = [0x0868acff, 0x43a2caff, 0x7bccc4ff, 0xa8ddb5ff, 0xccebc5ff, 0xf0f9e8ff]
export const GnBu7       = [0x08589eff, 0x2b8cbeff, 0x4eb3d3ff, 0x7bccc4ff, 0xa8ddb5ff, 0xccebc5ff, 0xf0f9e8ff]
export const GnBu8       = [0x08589eff, 0x2b8cbeff, 0x4eb3d3ff, 0x7bccc4ff, 0xa8ddb5ff, 0xccebc5ff, 0xe0f3dbff, 0xf7fcf0ff]
export const GnBu9       = [0x084081ff, 0x0868acff, 0x2b8cbeff, 0x4eb3d3ff, 0x7bccc4ff, 0xa8ddb5ff, 0xccebc5ff, 0xe0f3dbff, 0xf7fcf0ff]

export const BuGn3       = [0x2ca25fff, 0x99d8c9ff, 0xe5f5f9ff]
export const BuGn4       = [0x238b45ff, 0x66c2a4ff, 0xb2e2e2ff, 0xedf8fbff]
export const BuGn5       = [0x006d2cff, 0x2ca25fff, 0x66c2a4ff, 0xb2e2e2ff, 0xedf8fbff]
export const BuGn6       = [0x006d2cff, 0x2ca25fff, 0x66c2a4ff, 0x99d8c9ff, 0xccece6ff, 0xedf8fbff]
export const BuGn7       = [0x005824ff, 0x238b45ff, 0x41ae76ff, 0x66c2a4ff, 0x99d8c9ff, 0xccece6ff, 0xedf8fbff]
export const BuGn8       = [0x005824ff, 0x238b45ff, 0x41ae76ff, 0x66c2a4ff, 0x99d8c9ff, 0xccece6ff, 0xe5f5f9ff, 0xf7fcfdff]
export const BuGn9       = [0x00441bff, 0x006d2cff, 0x238b45ff, 0x41ae76ff, 0x66c2a4ff, 0x99d8c9ff, 0xccece6ff, 0xe5f5f9ff, 0xf7fcfdff]

export const PuBuGn3     = [0x1c9099ff, 0xa6bddbff, 0xece2f0ff]
export const PuBuGn4     = [0x02818aff, 0x67a9cfff, 0xbdc9e1ff, 0xf6eff7ff]
export const PuBuGn5     = [0x016c59ff, 0x1c9099ff, 0x67a9cfff, 0xbdc9e1ff, 0xf6eff7ff]
export const PuBuGn6     = [0x016c59ff, 0x1c9099ff, 0x67a9cfff, 0xa6bddbff, 0xd0d1e6ff, 0xf6eff7ff]
export const PuBuGn7     = [0x016450ff, 0x02818aff, 0x3690c0ff, 0x67a9cfff, 0xa6bddbff, 0xd0d1e6ff, 0xf6eff7ff]
export const PuBuGn8     = [0x016450ff, 0x02818aff, 0x3690c0ff, 0x67a9cfff, 0xa6bddbff, 0xd0d1e6ff, 0xece2f0ff, 0xfff7fbff]
export const PuBuGn9     = [0x014636ff, 0x016c59ff, 0x02818aff, 0x3690c0ff, 0x67a9cfff, 0xa6bddbff, 0xd0d1e6ff, 0xece2f0ff, 0xfff7fbff]

export const PuBu3       = [0x2b8cbeff, 0xa6bddbff, 0xece7f2ff]
export const PuBu4       = [0x0570b0ff, 0x74a9cfff, 0xbdc9e1ff, 0xf1eef6ff]
export const PuBu5       = [0x045a8dff, 0x2b8cbeff, 0x74a9cfff, 0xbdc9e1ff, 0xf1eef6ff]
export const PuBu6       = [0x045a8dff, 0x2b8cbeff, 0x74a9cfff, 0xa6bddbff, 0xd0d1e6ff, 0xf1eef6ff]
export const PuBu7       = [0x034e7bff, 0x0570b0ff, 0x3690c0ff, 0x74a9cfff, 0xa6bddbff, 0xd0d1e6ff, 0xf1eef6ff]
export const PuBu8       = [0x034e7bff, 0x0570b0ff, 0x3690c0ff, 0x74a9cfff, 0xa6bddbff, 0xd0d1e6ff, 0xece7f2ff, 0xfff7fbff]
export const PuBu9       = [0x023858ff, 0x045a8dff, 0x0570b0ff, 0x3690c0ff, 0x74a9cfff, 0xa6bddbff, 0xd0d1e6ff, 0xece7f2ff, 0xfff7fbff]

export const BuPu3       = [0x8856a7ff, 0x9ebcdaff, 0xe0ecf4ff]
export const BuPu4       = [0x88419dff, 0x8c96c6ff, 0xb3cde3ff, 0xedf8fbff]
export const BuPu5       = [0x810f7cff, 0x8856a7ff, 0x8c96c6ff, 0xb3cde3ff, 0xedf8fbff]
export const BuPu6       = [0x810f7cff, 0x8856a7ff, 0x8c96c6ff, 0x9ebcdaff, 0xbfd3e6ff, 0xedf8fbff]
export const BuPu7       = [0x6e016bff, 0x88419dff, 0x8c6bb1ff, 0x8c96c6ff, 0x9ebcdaff, 0xbfd3e6ff, 0xedf8fbff]
export const BuPu8       = [0x6e016bff, 0x88419dff, 0x8c6bb1ff, 0x8c96c6ff, 0x9ebcdaff, 0xbfd3e6ff, 0xe0ecf4ff, 0xf7fcfdff]
export const BuPu9       = [0x4d004bff, 0x810f7cff, 0x88419dff, 0x8c6bb1ff, 0x8c96c6ff, 0x9ebcdaff, 0xbfd3e6ff, 0xe0ecf4ff, 0xf7fcfdff]

export const RdPu3       = [0xc51b8aff, 0xfa9fb5ff, 0xfde0ddff]
export const RdPu4       = [0xae017eff, 0xf768a1ff, 0xfbb4b9ff, 0xfeebe2ff]
export const RdPu5       = [0x7a0177ff, 0xc51b8aff, 0xf768a1ff, 0xfbb4b9ff, 0xfeebe2ff]
export const RdPu6       = [0x7a0177ff, 0xc51b8aff, 0xf768a1ff, 0xfa9fb5ff, 0xfcc5c0ff, 0xfeebe2ff]
export const RdPu7       = [0x7a0177ff, 0xae017eff, 0xdd3497ff, 0xf768a1ff, 0xfa9fb5ff, 0xfcc5c0ff, 0xfeebe2ff]
export const RdPu8       = [0x7a0177ff, 0xae017eff, 0xdd3497ff, 0xf768a1ff, 0xfa9fb5ff, 0xfcc5c0ff, 0xfde0ddff, 0xfff7f3ff]
export const RdPu9       = [0x49006aff, 0x7a0177ff, 0xae017eff, 0xdd3497ff, 0xf768a1ff, 0xfa9fb5ff, 0xfcc5c0ff, 0xfde0ddff, 0xfff7f3ff]

export const PuRd3       = [0xdd1c77ff, 0xc994c7ff, 0xe7e1efff]
export const PuRd4       = [0xce1256ff, 0xdf65b0ff, 0xd7b5d8ff, 0xf1eef6ff]
export const PuRd5       = [0x980043ff, 0xdd1c77ff, 0xdf65b0ff, 0xd7b5d8ff, 0xf1eef6ff]
export const PuRd6       = [0x980043ff, 0xdd1c77ff, 0xdf65b0ff, 0xc994c7ff, 0xd4b9daff, 0xf1eef6ff]
export const PuRd7       = [0x91003fff, 0xce1256ff, 0xe7298aff, 0xdf65b0ff, 0xc994c7ff, 0xd4b9daff, 0xf1eef6ff]
export const PuRd8       = [0x91003fff, 0xce1256ff, 0xe7298aff, 0xdf65b0ff, 0xc994c7ff, 0xd4b9daff, 0xe7e1efff, 0xf7f4f9ff]
export const PuRd9       = [0x67001fff, 0x980043ff, 0xce1256ff, 0xe7298aff, 0xdf65b0ff, 0xc994c7ff, 0xd4b9daff, 0xe7e1efff, 0xf7f4f9ff]

export const OrRd3       = [0xe34a33ff, 0xfdbb84ff, 0xfee8c8ff]
export const OrRd4       = [0xd7301fff, 0xfc8d59ff, 0xfdcc8aff, 0xfef0d9ff]
export const OrRd5       = [0xb30000ff, 0xe34a33ff, 0xfc8d59ff, 0xfdcc8aff, 0xfef0d9ff]
export const OrRd6       = [0xb30000ff, 0xe34a33ff, 0xfc8d59ff, 0xfdbb84ff, 0xfdd49eff, 0xfef0d9ff]
export const OrRd7       = [0x990000ff, 0xd7301fff, 0xef6548ff, 0xfc8d59ff, 0xfdbb84ff, 0xfdd49eff, 0xfef0d9ff]
export const OrRd8       = [0x990000ff, 0xd7301fff, 0xef6548ff, 0xfc8d59ff, 0xfdbb84ff, 0xfdd49eff, 0xfee8c8ff, 0xfff7ecff]
export const OrRd9       = [0x7f0000ff, 0xb30000ff, 0xd7301fff, 0xef6548ff, 0xfc8d59ff, 0xfdbb84ff, 0xfdd49eff, 0xfee8c8ff, 0xfff7ecff]

export const YlOrRd3     = [0xf03b20ff, 0xfeb24cff, 0xffeda0ff]
export const YlOrRd4     = [0xe31a1cff, 0xfd8d3cff, 0xfecc5cff, 0xffffb2ff]
export const YlOrRd5     = [0xbd0026ff, 0xf03b20ff, 0xfd8d3cff, 0xfecc5cff, 0xffffb2ff]
export const YlOrRd6     = [0xbd0026ff, 0xf03b20ff, 0xfd8d3cff, 0xfeb24cff, 0xfed976ff, 0xffffb2ff]
export const YlOrRd7     = [0xb10026ff, 0xe31a1cff, 0xfc4e2aff, 0xfd8d3cff, 0xfeb24cff, 0xfed976ff, 0xffffb2ff]
export const YlOrRd8     = [0xb10026ff, 0xe31a1cff, 0xfc4e2aff, 0xfd8d3cff, 0xfeb24cff, 0xfed976ff, 0xffeda0ff, 0xffffccff]
export const YlOrRd9     = [0x800026ff, 0xbd0026ff, 0xe31a1cff, 0xfc4e2aff, 0xfd8d3cff, 0xfeb24cff, 0xfed976ff, 0xffeda0ff, 0xffffccff]

export const YlOrBr3     = [0xd95f0eff, 0xfec44fff, 0xfff7bcff]
export const YlOrBr4     = [0xcc4c02ff, 0xfe9929ff, 0xfed98eff, 0xffffd4ff]
export const YlOrBr5     = [0x993404ff, 0xd95f0eff, 0xfe9929ff, 0xfed98eff, 0xffffd4ff]
export const YlOrBr6     = [0x993404ff, 0xd95f0eff, 0xfe9929ff, 0xfec44fff, 0xfee391ff, 0xffffd4ff]
export const YlOrBr7     = [0x8c2d04ff, 0xcc4c02ff, 0xec7014ff, 0xfe9929ff, 0xfec44fff, 0xfee391ff, 0xffffd4ff]
export const YlOrBr8     = [0x8c2d04ff, 0xcc4c02ff, 0xec7014ff, 0xfe9929ff, 0xfec44fff, 0xfee391ff, 0xfff7bcff, 0xffffe5ff]
export const YlOrBr9     = [0x662506ff, 0x993404ff, 0xcc4c02ff, 0xec7014ff, 0xfe9929ff, 0xfec44fff, 0xfee391ff, 0xfff7bcff, 0xffffe5ff]

export const Purples3    = [0x756bb1ff, 0xbcbddcff, 0xefedf5ff]
export const Purples4    = [0x6a51a3ff, 0x9e9ac8ff, 0xcbc9e2ff, 0xf2f0f7ff]
export const Purples5    = [0x54278fff, 0x756bb1ff, 0x9e9ac8ff, 0xcbc9e2ff, 0xf2f0f7ff]
export const Purples6    = [0x54278fff, 0x756bb1ff, 0x9e9ac8ff, 0xbcbddcff, 0xdadaebff, 0xf2f0f7ff]
export const Purples7    = [0x4a1486ff, 0x6a51a3ff, 0x807dbaff, 0x9e9ac8ff, 0xbcbddcff, 0xdadaebff, 0xf2f0f7ff]
export const Purples8    = [0x4a1486ff, 0x6a51a3ff, 0x807dbaff, 0x9e9ac8ff, 0xbcbddcff, 0xdadaebff, 0xefedf5ff, 0xfcfbfdff]
export const Purples9    = [0x3f007dff, 0x54278fff, 0x6a51a3ff, 0x807dbaff, 0x9e9ac8ff, 0xbcbddcff, 0xdadaebff, 0xefedf5ff, 0xfcfbfdff]

export const Blues3      = [0x3182bdff, 0x9ecae1ff, 0xdeebf7ff]
export const Blues4      = [0x2171b5ff, 0x6baed6ff, 0xbdd7e7ff, 0xeff3ffff]
export const Blues5      = [0x08519cff, 0x3182bdff, 0x6baed6ff, 0xbdd7e7ff, 0xeff3ffff]
export const Blues6      = [0x08519cff, 0x3182bdff, 0x6baed6ff, 0x9ecae1ff, 0xc6dbefff, 0xeff3ffff]
export const Blues7      = [0x084594ff, 0x2171b5ff, 0x4292c6ff, 0x6baed6ff, 0x9ecae1ff, 0xc6dbefff, 0xeff3ffff]
export const Blues8      = [0x084594ff, 0x2171b5ff, 0x4292c6ff, 0x6baed6ff, 0x9ecae1ff, 0xc6dbefff, 0xdeebf7ff, 0xf7fbffff]
export const Blues9      = [0x08306bff, 0x08519cff, 0x2171b5ff, 0x4292c6ff, 0x6baed6ff, 0x9ecae1ff, 0xc6dbefff, 0xdeebf7ff, 0xf7fbffff]

export const Greens3     = [0x31a354ff, 0xa1d99bff, 0xe5f5e0ff]
export const Greens4     = [0x238b45ff, 0x74c476ff, 0xbae4b3ff, 0xedf8e9ff]
export const Greens5     = [0x006d2cff, 0x31a354ff, 0x74c476ff, 0xbae4b3ff, 0xedf8e9ff]
export const Greens6     = [0x006d2cff, 0x31a354ff, 0x74c476ff, 0xa1d99bff, 0xc7e9c0ff, 0xedf8e9ff]
export const Greens7     = [0x005a32ff, 0x238b45ff, 0x41ab5dff, 0x74c476ff, 0xa1d99bff, 0xc7e9c0ff, 0xedf8e9ff]
export const Greens8     = [0x005a32ff, 0x238b45ff, 0x41ab5dff, 0x74c476ff, 0xa1d99bff, 0xc7e9c0ff, 0xe5f5e0ff, 0xf7fcf5ff]
export const Greens9     = [0x00441bff, 0x006d2cff, 0x238b45ff, 0x41ab5dff, 0x74c476ff, 0xa1d99bff, 0xc7e9c0ff, 0xe5f5e0ff, 0xf7fcf5ff]

export const Oranges3    = [0xe6550dff, 0xfdae6bff, 0xfee6ceff]
export const Oranges4    = [0xd94701ff, 0xfd8d3cff, 0xfdbe85ff, 0xfeeddeff]
export const Oranges5    = [0xa63603ff, 0xe6550dff, 0xfd8d3cff, 0xfdbe85ff, 0xfeeddeff]
export const Oranges6    = [0xa63603ff, 0xe6550dff, 0xfd8d3cff, 0xfdae6bff, 0xfdd0a2ff, 0xfeeddeff]
export const Oranges7    = [0x8c2d04ff, 0xd94801ff, 0xf16913ff, 0xfd8d3cff, 0xfdae6bff, 0xfdd0a2ff, 0xfeeddeff]
export const Oranges8    = [0x8c2d04ff, 0xd94801ff, 0xf16913ff, 0xfd8d3cff, 0xfdae6bff, 0xfdd0a2ff, 0xfee6ceff, 0xfff5ebff]
export const Oranges9    = [0x7f2704ff, 0xa63603ff, 0xd94801ff, 0xf16913ff, 0xfd8d3cff, 0xfdae6bff, 0xfdd0a2ff, 0xfee6ceff, 0xfff5ebff]

export const Reds3       = [0xde2d26ff, 0xfc9272ff, 0xfee0d2ff]
export const Reds4       = [0xcb181dff, 0xfb6a4aff, 0xfcae91ff, 0xfee5d9ff]
export const Reds5       = [0xa50f15ff, 0xde2d26ff, 0xfb6a4aff, 0xfcae91ff, 0xfee5d9ff]
export const Reds6       = [0xa50f15ff, 0xde2d26ff, 0xfb6a4aff, 0xfc9272ff, 0xfcbba1ff, 0xfee5d9ff]
export const Reds7       = [0x99000dff, 0xcb181dff, 0xef3b2cff, 0xfb6a4aff, 0xfc9272ff, 0xfcbba1ff, 0xfee5d9ff]
export const Reds8       = [0x99000dff, 0xcb181dff, 0xef3b2cff, 0xfb6a4aff, 0xfc9272ff, 0xfcbba1ff, 0xfee0d2ff, 0xfff5f0ff]
export const Reds9       = [0x67000dff, 0xa50f15ff, 0xcb181dff, 0xef3b2cff, 0xfb6a4aff, 0xfc9272ff, 0xfcbba1ff, 0xfee0d2ff, 0xfff5f0ff]

export const Greys3      = [0x636363ff, 0xbdbdbdff, 0xf0f0f0ff]
export const Greys4      = [0x525252ff, 0x969696ff, 0xccccccff, 0xf7f7f7ff]
export const Greys5      = [0x252525ff, 0x636363ff, 0x969696ff, 0xccccccff, 0xf7f7f7ff]
export const Greys6      = [0x252525ff, 0x636363ff, 0x969696ff, 0xbdbdbdff, 0xd9d9d9ff, 0xf7f7f7ff]
export const Greys7      = [0x252525ff, 0x525252ff, 0x737373ff, 0x969696ff, 0xbdbdbdff, 0xd9d9d9ff, 0xf7f7f7ff]
export const Greys8      = [0x252525ff, 0x525252ff, 0x737373ff, 0x969696ff, 0xbdbdbdff, 0xd9d9d9ff, 0xf0f0f0ff, 0xffffffff]
export const Greys9      = [0x000000ff, 0x252525ff, 0x525252ff, 0x737373ff, 0x969696ff, 0xbdbdbdff, 0xd9d9d9ff, 0xf0f0f0ff, 0xffffffff]
export const Greys10     = [0x000000ff, 0x1c1c1cff, 0x383838ff, 0x555555ff, 0x717171ff, 0x8d8d8dff, 0xaaaaaaff, 0xc6c6c6ff, 0xe2e2e2ff, 0xffffffff]
export const Greys11     = [0x000000ff, 0x191919ff, 0x333333ff, 0x4c4c4cff, 0x666666ff, 0x7f7f7fff, 0x999999ff, 0xb2b2b2ff, 0xccccccff, 0xe5e5e5ff, 0xffffffff]
export const Greys256    = [
  0x000000ff, 0x010101ff, 0x020202ff, 0x030303ff, 0x040404ff, 0x050505ff, 0x060606ff, 0x070707ff,
  0x080808ff, 0x090909ff, 0x0a0a0aff, 0x0b0b0bff, 0x0c0c0cff, 0x0d0d0dff, 0x0e0e0eff, 0x0f0f0fff,
  0x101010ff, 0x111111ff, 0x121212ff, 0x131313ff, 0x141414ff, 0x151515ff, 0x161616ff, 0x171717ff,
  0x181818ff, 0x191919ff, 0x1a1a1aff, 0x1b1b1bff, 0x1c1c1cff, 0x1d1d1dff, 0x1e1e1eff, 0x1f1f1fff,
  0x202020ff, 0x212121ff, 0x222222ff, 0x232323ff, 0x242424ff, 0x252525ff, 0x262626ff, 0x272727ff,
  0x282828ff, 0x292929ff, 0x2a2a2aff, 0x2b2b2bff, 0x2c2c2cff, 0x2d2d2dff, 0x2e2e2eff, 0x2f2f2fff,
  0x303030ff, 0x313131ff, 0x323232ff, 0x333333ff, 0x343434ff, 0x353535ff, 0x363636ff, 0x373737ff,
  0x383838ff, 0x393939ff, 0x3a3a3aff, 0x3b3b3bff, 0x3c3c3cff, 0x3d3d3dff, 0x3e3e3eff, 0x3f3f3fff,
  0x404040ff, 0x414141ff, 0x424242ff, 0x434343ff, 0x444444ff, 0x454545ff, 0x464646ff, 0x474747ff,
  0x484848ff, 0x494949ff, 0x4a4a4aff, 0x4b4b4bff, 0x4c4c4cff, 0x4d4d4dff, 0x4e4e4eff, 0x4f4f4fff,
  0x505050ff, 0x515151ff, 0x525252ff, 0x535353ff, 0x545454ff, 0x555555ff, 0x565656ff, 0x575757ff,
  0x585858ff, 0x595959ff, 0x5a5a5aff, 0x5b5b5bff, 0x5c5c5cff, 0x5d5d5dff, 0x5e5e5eff, 0x5f5f5fff,
  0x606060ff, 0x616161ff, 0x626262ff, 0x636363ff, 0x646464ff, 0x656565ff, 0x666666ff, 0x676767ff,
  0x686868ff, 0x696969ff, 0x6a6a6aff, 0x6b6b6bff, 0x6c6c6cff, 0x6d6d6dff, 0x6e6e6eff, 0x6f6f6fff,
  0x707070ff, 0x717171ff, 0x727272ff, 0x737373ff, 0x747474ff, 0x757575ff, 0x767676ff, 0x777777ff,
  0x787878ff, 0x797979ff, 0x7a7a7aff, 0x7b7b7bff, 0x7c7c7cff, 0x7d7d7dff, 0x7e7e7eff, 0x7f7f7fff,
  0x808080ff, 0x818181ff, 0x828282ff, 0x838383ff, 0x848484ff, 0x858585ff, 0x868686ff, 0x878787ff,
  0x888888ff, 0x898989ff, 0x8a8a8aff, 0x8b8b8bff, 0x8c8c8cff, 0x8d8d8dff, 0x8e8e8eff, 0x8f8f8fff,
  0x909090ff, 0x919191ff, 0x929292ff, 0x939393ff, 0x949494ff, 0x959595ff, 0x969696ff, 0x979797ff,
  0x989898ff, 0x999999ff, 0x9a9a9aff, 0x9b9b9bff, 0x9c9c9cff, 0x9d9d9dff, 0x9e9e9eff, 0x9f9f9fff,
  0xa0a0a0ff, 0xa1a1a1ff, 0xa2a2a2ff, 0xa3a3a3ff, 0xa4a4a4ff, 0xa5a5a5ff, 0xa6a6a6ff, 0xa7a7a7ff,
  0xa8a8a8ff, 0xa9a9a9ff, 0xaaaaaaff, 0xabababff, 0xacacacff, 0xadadadff, 0xaeaeaeff, 0xafafafff,
  0xb0b0b0ff, 0xb1b1b1ff, 0xb2b2b2ff, 0xb3b3b3ff, 0xb4b4b4ff, 0xb5b5b5ff, 0xb6b6b6ff, 0xb7b7b7ff,
  0xb8b8b8ff, 0xb9b9b9ff, 0xbababaff, 0xbbbbbbff, 0xbcbcbcff, 0xbdbdbdff, 0xbebebeff, 0xbfbfbfff,
  0xc0c0c0ff, 0xc1c1c1ff, 0xc2c2c2ff, 0xc3c3c3ff, 0xc4c4c4ff, 0xc5c5c5ff, 0xc6c6c6ff, 0xc7c7c7ff,
  0xc8c8c8ff, 0xc9c9c9ff, 0xcacacaff, 0xcbcbcbff, 0xccccccff, 0xcdcdcdff, 0xcececeff, 0xcfcfcfff,
  0xd0d0d0ff, 0xd1d1d1ff, 0xd2d2d2ff, 0xd3d3d3ff, 0xd4d4d4ff, 0xd5d5d5ff, 0xd6d6d6ff, 0xd7d7d7ff,
  0xd8d8d8ff, 0xd9d9d9ff, 0xdadadaff, 0xdbdbdbff, 0xdcdcdcff, 0xddddddff, 0xdededeff, 0xdfdfdfff,
  0xe0e0e0ff, 0xe1e1e1ff, 0xe2e2e2ff, 0xe3e3e3ff, 0xe4e4e4ff, 0xe5e5e5ff, 0xe6e6e6ff, 0xe7e7e7ff,
  0xe8e8e8ff, 0xe9e9e9ff, 0xeaeaeaff, 0xebebebff, 0xecececff, 0xedededff, 0xeeeeeeff, 0xefefefff,
  0xf0f0f0ff, 0xf1f1f1ff, 0xf2f2f2ff, 0xf3f3f3ff, 0xf4f4f4ff, 0xf5f5f5ff, 0xf6f6f6ff, 0xf7f7f7ff,
  0xf8f8f8ff, 0xf9f9f9ff, 0xfafafaff, 0xfbfbfbff, 0xfcfcfcff, 0xfdfdfdff, 0xfefefeff, 0xffffffff,
]

export const PuOr3       = [0x998ec3ff, 0xf7f7f7ff, 0xf1a340ff]
export const PuOr4       = [0x5e3c99ff, 0xb2abd2ff, 0xfdb863ff, 0xe66101ff]
export const PuOr5       = [0x5e3c99ff, 0xb2abd2ff, 0xf7f7f7ff, 0xfdb863ff, 0xe66101ff]
export const PuOr6       = [0x542788ff, 0x998ec3ff, 0xd8daebff, 0xfee0b6ff, 0xf1a340ff, 0xb35806ff]
export const PuOr7       = [0x542788ff, 0x998ec3ff, 0xd8daebff, 0xf7f7f7ff, 0xfee0b6ff, 0xf1a340ff, 0xb35806ff]
export const PuOr8       = [0x542788ff, 0x8073acff, 0xb2abd2ff, 0xd8daebff, 0xfee0b6ff, 0xfdb863ff, 0xe08214ff, 0xb35806ff]
export const PuOr9       = [0x542788ff, 0x8073acff, 0xb2abd2ff, 0xd8daebff, 0xf7f7f7ff, 0xfee0b6ff, 0xfdb863ff, 0xe08214ff, 0xb35806ff]
export const PuOr10      = [0x2d004bff, 0x542788ff, 0x8073acff, 0xb2abd2ff, 0xd8daebff, 0xfee0b6ff, 0xfdb863ff, 0xe08214ff, 0xb35806ff, 0x7f3b08ff]
export const PuOr11      = [0x2d004bff, 0x542788ff, 0x8073acff, 0xb2abd2ff, 0xd8daebff, 0xf7f7f7ff, 0xfee0b6ff, 0xfdb863ff, 0xe08214ff, 0xb35806ff, 0x7f3b08ff]

export const BrBG3       = [0x5ab4acff, 0xf5f5f5ff, 0xd8b365ff]
export const BrBG4       = [0x018571ff, 0x80cdc1ff, 0xdfc27dff, 0xa6611aff]
export const BrBG5       = [0x018571ff, 0x80cdc1ff, 0xf5f5f5ff, 0xdfc27dff, 0xa6611aff]
export const BrBG6       = [0x01665eff, 0x5ab4acff, 0xc7eae5ff, 0xf6e8c3ff, 0xd8b365ff, 0x8c510aff]
export const BrBG7       = [0x01665eff, 0x5ab4acff, 0xc7eae5ff, 0xf5f5f5ff, 0xf6e8c3ff, 0xd8b365ff, 0x8c510aff]
export const BrBG8       = [0x01665eff, 0x35978fff, 0x80cdc1ff, 0xc7eae5ff, 0xf6e8c3ff, 0xdfc27dff, 0xbf812dff, 0x8c510aff]
export const BrBG9       = [0x01665eff, 0x35978fff, 0x80cdc1ff, 0xc7eae5ff, 0xf5f5f5ff, 0xf6e8c3ff, 0xdfc27dff, 0xbf812dff, 0x8c510aff]
export const BrBG10      = [0x003c30ff, 0x01665eff, 0x35978fff, 0x80cdc1ff, 0xc7eae5ff, 0xf6e8c3ff, 0xdfc27dff, 0xbf812dff, 0x8c510aff, 0x543005ff]
export const BrBG11      = [0x003c30ff, 0x01665eff, 0x35978fff, 0x80cdc1ff, 0xc7eae5ff, 0xf5f5f5ff, 0xf6e8c3ff, 0xdfc27dff, 0xbf812dff, 0x8c510aff, 0x543005ff]

export const PRGn3       = [0x7fbf7bff, 0xf7f7f7ff, 0xaf8dc3ff]
export const PRGn4       = [0x008837ff, 0xa6dba0ff, 0xc2a5cfff, 0x7b3294ff]
export const PRGn5       = [0x008837ff, 0xa6dba0ff, 0xf7f7f7ff, 0xc2a5cfff, 0x7b3294ff]
export const PRGn6       = [0x1b7837ff, 0x7fbf7bff, 0xd9f0d3ff, 0xe7d4e8ff, 0xaf8dc3ff, 0x762a83ff]
export const PRGn7       = [0x1b7837ff, 0x7fbf7bff, 0xd9f0d3ff, 0xf7f7f7ff, 0xe7d4e8ff, 0xaf8dc3ff, 0x762a83ff]
export const PRGn8       = [0x1b7837ff, 0x5aae61ff, 0xa6dba0ff, 0xd9f0d3ff, 0xe7d4e8ff, 0xc2a5cfff, 0x9970abff, 0x762a83ff]
export const PRGn9       = [0x1b7837ff, 0x5aae61ff, 0xa6dba0ff, 0xd9f0d3ff, 0xf7f7f7ff, 0xe7d4e8ff, 0xc2a5cfff, 0x9970abff, 0x762a83ff]
export const PRGn10      = [0x00441bff, 0x1b7837ff, 0x5aae61ff, 0xa6dba0ff, 0xd9f0d3ff, 0xe7d4e8ff, 0xc2a5cfff, 0x9970abff, 0x762a83ff, 0x40004bff]
export const PRGn11      = [0x00441bff, 0x1b7837ff, 0x5aae61ff, 0xa6dba0ff, 0xd9f0d3ff, 0xf7f7f7ff, 0xe7d4e8ff, 0xc2a5cfff, 0x9970abff, 0x762a83ff, 0x40004bff]

export const PiYG3       = [0xa1d76aff, 0xf7f7f7ff, 0xe9a3c9ff]
export const PiYG4       = [0x4dac26ff, 0xb8e186ff, 0xf1b6daff, 0xd01c8bff]
export const PiYG5       = [0x4dac26ff, 0xb8e186ff, 0xf7f7f7ff, 0xf1b6daff, 0xd01c8bff]
export const PiYG6       = [0x4d9221ff, 0xa1d76aff, 0xe6f5d0ff, 0xfde0efff, 0xe9a3c9ff, 0xc51b7dff]
export const PiYG7       = [0x4d9221ff, 0xa1d76aff, 0xe6f5d0ff, 0xf7f7f7ff, 0xfde0efff, 0xe9a3c9ff, 0xc51b7dff]
export const PiYG8       = [0x4d9221ff, 0x7fbc41ff, 0xb8e186ff, 0xe6f5d0ff, 0xfde0efff, 0xf1b6daff, 0xde77aeff, 0xc51b7dff]
export const PiYG9       = [0x4d9221ff, 0x7fbc41ff, 0xb8e186ff, 0xe6f5d0ff, 0xf7f7f7ff, 0xfde0efff, 0xf1b6daff, 0xde77aeff, 0xc51b7dff]
export const PiYG10      = [0x276419ff, 0x4d9221ff, 0x7fbc41ff, 0xb8e186ff, 0xe6f5d0ff, 0xfde0efff, 0xf1b6daff, 0xde77aeff, 0xc51b7dff, 0x8e0152ff]
export const PiYG11      = [0x276419ff, 0x4d9221ff, 0x7fbc41ff, 0xb8e186ff, 0xe6f5d0ff, 0xf7f7f7ff, 0xfde0efff, 0xf1b6daff, 0xde77aeff, 0xc51b7dff, 0x8e0152ff]

export const RdBu3       = [0x67a9cfff, 0xf7f7f7ff, 0xef8a62ff]
export const RdBu4       = [0x0571b0ff, 0x92c5deff, 0xf4a582ff, 0xca0020ff]
export const RdBu5       = [0x0571b0ff, 0x92c5deff, 0xf7f7f7ff, 0xf4a582ff, 0xca0020ff]
export const RdBu6       = [0x2166acff, 0x67a9cfff, 0xd1e5f0ff, 0xfddbc7ff, 0xef8a62ff, 0xb2182bff]
export const RdBu7       = [0x2166acff, 0x67a9cfff, 0xd1e5f0ff, 0xf7f7f7ff, 0xfddbc7ff, 0xef8a62ff, 0xb2182bff]
export const RdBu8       = [0x2166acff, 0x4393c3ff, 0x92c5deff, 0xd1e5f0ff, 0xfddbc7ff, 0xf4a582ff, 0xd6604dff, 0xb2182bff]
export const RdBu9       = [0x2166acff, 0x4393c3ff, 0x92c5deff, 0xd1e5f0ff, 0xf7f7f7ff, 0xfddbc7ff, 0xf4a582ff, 0xd6604dff, 0xb2182bff]
export const RdBu10      = [0x053061ff, 0x2166acff, 0x4393c3ff, 0x92c5deff, 0xd1e5f0ff, 0xfddbc7ff, 0xf4a582ff, 0xd6604dff, 0xb2182bff, 0x67001fff]
export const RdBu11      = [0x053061ff, 0x2166acff, 0x4393c3ff, 0x92c5deff, 0xd1e5f0ff, 0xf7f7f7ff, 0xfddbc7ff, 0xf4a582ff, 0xd6604dff, 0xb2182bff, 0x67001fff]

export const RdGy3       = [0x999999ff, 0xffffffff, 0xef8a62ff]
export const RdGy4       = [0x404040ff, 0xbababaff, 0xf4a582ff, 0xca0020ff]
export const RdGy5       = [0x404040ff, 0xbababaff, 0xffffffff, 0xf4a582ff, 0xca0020ff]
export const RdGy6       = [0x4d4d4dff, 0x999999ff, 0xe0e0e0ff, 0xfddbc7ff, 0xef8a62ff, 0xb2182bff]
export const RdGy7       = [0x4d4d4dff, 0x999999ff, 0xe0e0e0ff, 0xffffffff, 0xfddbc7ff, 0xef8a62ff, 0xb2182bff]
export const RdGy8       = [0x4d4d4dff, 0x878787ff, 0xbababaff, 0xe0e0e0ff, 0xfddbc7ff, 0xf4a582ff, 0xd6604dff, 0xb2182bff]
export const RdGy9       = [0x4d4d4dff, 0x878787ff, 0xbababaff, 0xe0e0e0ff, 0xffffffff, 0xfddbc7ff, 0xf4a582ff, 0xd6604dff, 0xb2182bff]
export const RdGy10      = [0x1a1a1aff, 0x4d4d4dff, 0x878787ff, 0xbababaff, 0xe0e0e0ff, 0xfddbc7ff, 0xf4a582ff, 0xd6604dff, 0xb2182bff, 0x67001fff]
export const RdGy11      = [0x1a1a1aff, 0x4d4d4dff, 0x878787ff, 0xbababaff, 0xe0e0e0ff, 0xffffffff, 0xfddbc7ff, 0xf4a582ff, 0xd6604dff, 0xb2182bff, 0x67001fff]

export const RdYlBu3     = [0x91bfdbff, 0xffffbfff, 0xfc8d59ff]
export const RdYlBu4     = [0x2c7bb6ff, 0xabd9e9ff, 0xfdae61ff, 0xd7191cff]
export const RdYlBu5     = [0x2c7bb6ff, 0xabd9e9ff, 0xffffbfff, 0xfdae61ff, 0xd7191cff]
export const RdYlBu6     = [0x4575b4ff, 0x91bfdbff, 0xe0f3f8ff, 0xfee090ff, 0xfc8d59ff, 0xd73027ff]
export const RdYlBu7     = [0x4575b4ff, 0x91bfdbff, 0xe0f3f8ff, 0xffffbfff, 0xfee090ff, 0xfc8d59ff, 0xd73027ff]
export const RdYlBu8     = [0x4575b4ff, 0x74add1ff, 0xabd9e9ff, 0xe0f3f8ff, 0xfee090ff, 0xfdae61ff, 0xf46d43ff, 0xd73027ff]
export const RdYlBu9     = [0x4575b4ff, 0x74add1ff, 0xabd9e9ff, 0xe0f3f8ff, 0xffffbfff, 0xfee090ff, 0xfdae61ff, 0xf46d43ff, 0xd73027ff]
export const RdYlBu10    = [0x313695ff, 0x4575b4ff, 0x74add1ff, 0xabd9e9ff, 0xe0f3f8ff, 0xfee090ff, 0xfdae61ff, 0xf46d43ff, 0xd73027ff, 0xa50026ff]
export const RdYlBu11    = [0x313695ff, 0x4575b4ff, 0x74add1ff, 0xabd9e9ff, 0xe0f3f8ff, 0xffffbfff, 0xfee090ff, 0xfdae61ff, 0xf46d43ff, 0xd73027ff, 0xa50026ff]

export const Spectral3   = [0x99d594ff, 0xffffbfff, 0xfc8d59ff]
export const Spectral4   = [0x2b83baff, 0xabdda4ff, 0xfdae61ff, 0xd7191cff]
export const Spectral5   = [0x2b83baff, 0xabdda4ff, 0xffffbfff, 0xfdae61ff, 0xd7191cff]
export const Spectral6   = [0x3288bdff, 0x99d594ff, 0xe6f598ff, 0xfee08bff, 0xfc8d59ff, 0xd53e4fff]
export const Spectral7   = [0x3288bdff, 0x99d594ff, 0xe6f598ff, 0xffffbfff, 0xfee08bff, 0xfc8d59ff, 0xd53e4fff]
export const Spectral8   = [0x3288bdff, 0x66c2a5ff, 0xabdda4ff, 0xe6f598ff, 0xfee08bff, 0xfdae61ff, 0xf46d43ff, 0xd53e4fff]
export const Spectral9   = [0x3288bdff, 0x66c2a5ff, 0xabdda4ff, 0xe6f598ff, 0xffffbfff, 0xfee08bff, 0xfdae61ff, 0xf46d43ff, 0xd53e4fff]
export const Spectral10  = [0x5e4fa2ff, 0x3288bdff, 0x66c2a5ff, 0xabdda4ff, 0xe6f598ff, 0xfee08bff, 0xfdae61ff, 0xf46d43ff, 0xd53e4fff, 0x9e0142ff]
export const Spectral11  = [0x5e4fa2ff, 0x3288bdff, 0x66c2a5ff, 0xabdda4ff, 0xe6f598ff, 0xffffbfff, 0xfee08bff, 0xfdae61ff, 0xf46d43ff, 0xd53e4fff, 0x9e0142ff]

export const RdYlGn3     = [0x91cf60ff, 0xffffbfff, 0xfc8d59ff]
export const RdYlGn4     = [0x1a9641ff, 0xa6d96aff, 0xfdae61ff, 0xd7191cff]
export const RdYlGn5     = [0x1a9641ff, 0xa6d96aff, 0xffffbfff, 0xfdae61ff, 0xd7191cff]
export const RdYlGn6     = [0x1a9850ff, 0x91cf60ff, 0xd9ef8bff, 0xfee08bff, 0xfc8d59ff, 0xd73027ff]
export const RdYlGn7     = [0x1a9850ff, 0x91cf60ff, 0xd9ef8bff, 0xffffbfff, 0xfee08bff, 0xfc8d59ff, 0xd73027ff]
export const RdYlGn8     = [0x1a9850ff, 0x66bd63ff, 0xa6d96aff, 0xd9ef8bff, 0xfee08bff, 0xfdae61ff, 0xf46d43ff, 0xd73027ff]
export const RdYlGn9     = [0x1a9850ff, 0x66bd63ff, 0xa6d96aff, 0xd9ef8bff, 0xffffbfff, 0xfee08bff, 0xfdae61ff, 0xf46d43ff, 0xd73027ff]
export const RdYlGn10    = [0x006837ff, 0x1a9850ff, 0x66bd63ff, 0xa6d96aff, 0xd9ef8bff, 0xfee08bff, 0xfdae61ff, 0xf46d43ff, 0xd73027ff, 0xa50026ff]
export const RdYlGn11    = [0x006837ff, 0x1a9850ff, 0x66bd63ff, 0xa6d96aff, 0xd9ef8bff, 0xffffbfff, 0xfee08bff, 0xfdae61ff, 0xf46d43ff, 0xd73027ff, 0xa50026ff]

export const Bokeh3      = [0xec1557ff, 0xf05223ff, 0xf6a91bff]
export const Bokeh4      = [...Bokeh3, 0xa5cd39ff]
export const Bokeh5      = [...Bokeh4, 0x20b254ff]
export const Bokeh6      = [...Bokeh5, 0x00aaaeff]
export const Bokeh7      = [...Bokeh6, 0x892889ff]
export const Bokeh8      = [...Bokeh6, 0x4998d3ff, 0x892889ff]

export const Inferno3    = [0x000003ff, 0xba3655ff, 0xfcfea4ff]
export const Inferno4    = [0x000003ff, 0x781c6dff, 0xed6825ff, 0xfcfea4ff]
export const Inferno5    = [0x000003ff, 0x550f6dff, 0xba3655ff, 0xf98c09ff, 0xfcfea4ff]
export const Inferno6    = [0x000003ff, 0x410967ff, 0x932567ff, 0xdc5039ff, 0xfba40aff, 0xfcfea4ff]
export const Inferno7    = [0x000003ff, 0x32095dff, 0x781c6dff, 0xba3655ff, 0xed6825ff, 0xfbb318ff, 0xfcfea4ff]
export const Inferno8    = [0x000003ff, 0x270b52ff, 0x63146eff, 0x9e2963ff, 0xd24742ff, 0xf57c15ff, 0xfabf25ff, 0xfcfea4ff]
export const Inferno9    = [0x000003ff, 0x1f0c47ff, 0x550f6dff, 0x88216aff, 0xba3655ff, 0xe35832ff, 0xf98c09ff, 0xf8c931ff, 0xfcfea4ff]
export const Inferno10   = [0x000003ff, 0x1a0b40ff, 0x4a0b6aff, 0x781c6dff, 0xa42c60ff, 0xcd4247ff, 0xed6825ff, 0xfb9906ff, 0xf7cf3aff, 0xfcfea4ff]
export const Inferno11   = [0x000003ff, 0x160b39ff, 0x410967ff, 0x6a176eff, 0x932567ff, 0xba3655ff, 0xdc5039ff, 0xf2751aff, 0xfba40aff, 0xf6d542ff, 0xfcfea4ff]
export const Inferno256  = [
  0x000003ff, 0x000004ff, 0x000006ff, 0x010007ff, 0x010109ff, 0x01010bff, 0x02010eff, 0x020210ff,
  0x030212ff, 0x040314ff, 0x040316ff, 0x050418ff, 0x06041bff, 0x07051dff, 0x08061fff, 0x090621ff,
  0x0a0723ff, 0x0b0726ff, 0x0d0828ff, 0x0e082aff, 0x0f092dff, 0x10092fff, 0x120a32ff, 0x130a34ff,
  0x140b36ff, 0x160b39ff, 0x170b3bff, 0x190b3eff, 0x1a0b40ff, 0x1c0c43ff, 0x1d0c45ff, 0x1f0c47ff,
  0x200c4aff, 0x220b4cff, 0x240b4eff, 0x260b50ff, 0x270b52ff, 0x290b54ff, 0x2b0a56ff, 0x2d0a58ff,
  0x2e0a5aff, 0x300a5cff, 0x32095dff, 0x34095fff, 0x350960ff, 0x370961ff, 0x390962ff, 0x3b0964ff,
  0x3c0965ff, 0x3e0966ff, 0x400966ff, 0x410967ff, 0x430a68ff, 0x450a69ff, 0x460a69ff, 0x480b6aff,
  0x4a0b6aff, 0x4b0c6bff, 0x4d0c6bff, 0x4f0d6cff, 0x500d6cff, 0x520e6cff, 0x530e6dff, 0x550f6dff,
  0x570f6dff, 0x58106dff, 0x5a116dff, 0x5b116eff, 0x5d126eff, 0x5f126eff, 0x60136eff, 0x62146eff,
  0x63146eff, 0x65156eff, 0x66156eff, 0x68166eff, 0x6a176eff, 0x6b176eff, 0x6d186eff, 0x6e186eff,
  0x70196eff, 0x72196dff, 0x731a6dff, 0x751b6dff, 0x761b6dff, 0x781c6dff, 0x7a1c6dff, 0x7b1d6cff,
  0x7d1d6cff, 0x7e1e6cff, 0x801f6bff, 0x811f6bff, 0x83206bff, 0x85206aff, 0x86216aff, 0x88216aff,
  0x892269ff, 0x8b2269ff, 0x8d2369ff, 0x8e2468ff, 0x902468ff, 0x912567ff, 0x932567ff, 0x952666ff,
  0x962666ff, 0x982765ff, 0x992864ff, 0x9b2864ff, 0x9c2963ff, 0x9e2963ff, 0xa02a62ff, 0xa12b61ff,
  0xa32b61ff, 0xa42c60ff, 0xa62c5fff, 0xa72d5fff, 0xa92e5eff, 0xab2e5dff, 0xac2f5cff, 0xae305bff,
  0xaf315bff, 0xb1315aff, 0xb23259ff, 0xb43358ff, 0xb53357ff, 0xb73456ff, 0xb83556ff, 0xba3655ff,
  0xbb3754ff, 0xbd3753ff, 0xbe3852ff, 0xbf3951ff, 0xc13a50ff, 0xc23b4fff, 0xc43c4eff, 0xc53d4dff,
  0xc73e4cff, 0xc83e4bff, 0xc93f4aff, 0xcb4049ff, 0xcc4148ff, 0xcd4247ff, 0xcf4446ff, 0xd04544ff,
  0xd14643ff, 0xd24742ff, 0xd44841ff, 0xd54940ff, 0xd64a3fff, 0xd74b3eff, 0xd94d3dff, 0xda4e3bff,
  0xdb4f3aff, 0xdc5039ff, 0xdd5238ff, 0xde5337ff, 0xdf5436ff, 0xe05634ff, 0xe25733ff, 0xe35832ff,
  0xe45a31ff, 0xe55b30ff, 0xe65c2eff, 0xe65e2dff, 0xe75f2cff, 0xe8612bff, 0xe9622aff, 0xea6428ff,
  0xeb6527ff, 0xec6726ff, 0xed6825ff, 0xed6a23ff, 0xee6c22ff, 0xef6d21ff, 0xf06f1fff, 0xf0701eff,
  0xf1721dff, 0xf2741cff, 0xf2751aff, 0xf37719ff, 0xf37918ff, 0xf47a16ff, 0xf57c15ff, 0xf57e14ff,
  0xf68012ff, 0xf68111ff, 0xf78310ff, 0xf7850eff, 0xf8870dff, 0xf8880cff, 0xf88a0bff, 0xf98c09ff,
  0xf98e08ff, 0xf99008ff, 0xfa9107ff, 0xfa9306ff, 0xfa9506ff, 0xfa9706ff, 0xfb9906ff, 0xfb9b06ff,
  0xfb9d06ff, 0xfb9e07ff, 0xfba007ff, 0xfba208ff, 0xfba40aff, 0xfba60bff, 0xfba80dff, 0xfbaa0eff,
  0xfbac10ff, 0xfbae12ff, 0xfbb014ff, 0xfbb116ff, 0xfbb318ff, 0xfbb51aff, 0xfbb71cff, 0xfbb91eff,
  0xfabb21ff, 0xfabd23ff, 0xfabf25ff, 0xfac128ff, 0xf9c32aff, 0xf9c52cff, 0xf9c72fff, 0xf8c931ff,
  0xf8cb34ff, 0xf8cd37ff, 0xf7cf3aff, 0xf7d13cff, 0xf6d33fff, 0xf6d542ff, 0xf5d745ff, 0xf5d948ff,
  0xf4db4bff, 0xf4dc4fff, 0xf3de52ff, 0xf3e056ff, 0xf3e259ff, 0xf2e45dff, 0xf2e660ff, 0xf1e864ff,
  0xf1e968ff, 0xf1eb6cff, 0xf1ed70ff, 0xf1ee74ff, 0xf1f079ff, 0xf1f27dff, 0xf2f381ff, 0xf2f485ff,
  0xf3f689ff, 0xf4f78dff, 0xf5f891ff, 0xf6fa95ff, 0xf7fb99ff, 0xf9fc9dff, 0xfafda0ff, 0xfcfea4ff,
]

export const Magma3      = [0x000003ff, 0xb53679ff, 0xfbfcbfff]
export const Magma4      = [0x000003ff, 0x711f81ff, 0xf0605dff, 0xfbfcbfff]
export const Magma5      = [0x000003ff, 0x4f117bff, 0xb53679ff, 0xfb8660ff, 0xfbfcbfff]
export const Magma6      = [0x000003ff, 0x3b0f6fff, 0x8c2980ff, 0xdd4968ff, 0xfd9f6cff, 0xfbfcbfff]
export const Magma7      = [0x000003ff, 0x2b115eff, 0x711f81ff, 0xb53679ff, 0xf0605dff, 0xfeae76ff, 0xfbfcbfff]
export const Magma8      = [0x000003ff, 0x221150ff, 0x5d177eff, 0x972c7fff, 0xd1426eff, 0xf8755cff, 0xfeb97fff, 0xfbfcbfff]
export const Magma9      = [0x000003ff, 0x1b1044ff, 0x4f117bff, 0x812581ff, 0xb53679ff, 0xe55063ff, 0xfb8660ff, 0xfec286ff, 0xfbfcbfff]
export const Magma10     = [0x000003ff, 0x170f3cff, 0x430f75ff, 0x711f81ff, 0x9e2e7eff, 0xcb3e71ff, 0xf0605dff, 0xfc9366ff, 0xfec78bff, 0xfbfcbfff]
export const Magma11     = [0x000003ff, 0x140d35ff, 0x3b0f6fff, 0x63197fff, 0x8c2980ff, 0xb53679ff, 0xdd4968ff, 0xf66e5bff, 0xfd9f6cff, 0xfdcd90ff, 0xfbfcbfff]
export const Magma256    = [
  0x000003ff, 0x000004ff, 0x000006ff, 0x010007ff, 0x010109ff, 0x01010bff, 0x02020dff, 0x02020fff,
  0x030311ff, 0x040313ff, 0x040415ff, 0x050417ff, 0x060519ff, 0x07051bff, 0x08061dff, 0x09071fff,
  0x0a0722ff, 0x0b0824ff, 0x0c0926ff, 0x0d0a28ff, 0x0e0a2aff, 0x0f0b2cff, 0x100c2fff, 0x110c31ff,
  0x120d33ff, 0x140d35ff, 0x150e38ff, 0x160e3aff, 0x170f3cff, 0x180f3fff, 0x1a1041ff, 0x1b1044ff,
  0x1c1046ff, 0x1e1049ff, 0x1f114bff, 0x20114dff, 0x221150ff, 0x231152ff, 0x251155ff, 0x261157ff,
  0x281159ff, 0x2a115cff, 0x2b115eff, 0x2d1060ff, 0x2f1062ff, 0x301065ff, 0x321067ff, 0x341068ff,
  0x350f6aff, 0x370f6cff, 0x390f6eff, 0x3b0f6fff, 0x3c0f71ff, 0x3e0f72ff, 0x400f73ff, 0x420f74ff,
  0x430f75ff, 0x450f76ff, 0x470f77ff, 0x481078ff, 0x4a1079ff, 0x4b1079ff, 0x4d117aff, 0x4f117bff,
  0x50127bff, 0x52127cff, 0x53137cff, 0x55137dff, 0x57147dff, 0x58157eff, 0x5a157eff, 0x5b167eff,
  0x5d177eff, 0x5e177fff, 0x60187fff, 0x61187fff, 0x63197fff, 0x651a80ff, 0x661a80ff, 0x681b80ff,
  0x691c80ff, 0x6b1c80ff, 0x6c1d80ff, 0x6e1e81ff, 0x6f1e81ff, 0x711f81ff, 0x731f81ff, 0x742081ff,
  0x762181ff, 0x772181ff, 0x792281ff, 0x7a2281ff, 0x7c2381ff, 0x7e2481ff, 0x7f2481ff, 0x812581ff,
  0x822581ff, 0x842681ff, 0x852681ff, 0x872781ff, 0x892881ff, 0x8a2881ff, 0x8c2980ff, 0x8d2980ff,
  0x8f2a80ff, 0x912a80ff, 0x922b80ff, 0x942b80ff, 0x952c80ff, 0x972c7fff, 0x992d7fff, 0x9a2d7fff,
  0x9c2e7fff, 0x9e2e7eff, 0x9f2f7eff, 0xa12f7eff, 0xa3307eff, 0xa4307dff, 0xa6317dff, 0xa7317dff,
  0xa9327cff, 0xab337cff, 0xac337bff, 0xae347bff, 0xb0347bff, 0xb1357aff, 0xb3357aff, 0xb53679ff,
  0xb63679ff, 0xb83778ff, 0xb93778ff, 0xbb3877ff, 0xbd3977ff, 0xbe3976ff, 0xc03a75ff, 0xc23a75ff,
  0xc33b74ff, 0xc53c74ff, 0xc63c73ff, 0xc83d72ff, 0xca3e72ff, 0xcb3e71ff, 0xcd3f70ff, 0xce4070ff,
  0xd0416fff, 0xd1426eff, 0xd3426dff, 0xd4436dff, 0xd6446cff, 0xd7456bff, 0xd9466aff, 0xda4769ff,
  0xdc4869ff, 0xdd4968ff, 0xde4a67ff, 0xe04b66ff, 0xe14c66ff, 0xe24d65ff, 0xe44e64ff, 0xe55063ff,
  0xe65162ff, 0xe75262ff, 0xe85461ff, 0xea5560ff, 0xeb5660ff, 0xec585fff, 0xed595fff, 0xee5b5eff,
  0xee5d5dff, 0xef5e5dff, 0xf0605dff, 0xf1615cff, 0xf2635cff, 0xf3655cff, 0xf3675bff, 0xf4685bff,
  0xf56a5bff, 0xf56c5bff, 0xf66e5bff, 0xf6705bff, 0xf7715bff, 0xf7735cff, 0xf8755cff, 0xf8775cff,
  0xf9795cff, 0xf97b5dff, 0xf97d5dff, 0xfa7f5eff, 0xfa805eff, 0xfa825fff, 0xfb8460ff, 0xfb8660ff,
  0xfb8861ff, 0xfb8a62ff, 0xfc8c63ff, 0xfc8e63ff, 0xfc9064ff, 0xfc9265ff, 0xfc9366ff, 0xfd9567ff,
  0xfd9768ff, 0xfd9969ff, 0xfd9b6aff, 0xfd9d6bff, 0xfd9f6cff, 0xfda16eff, 0xfda26fff, 0xfda470ff,
  0xfea671ff, 0xfea873ff, 0xfeaa74ff, 0xfeac75ff, 0xfeae76ff, 0xfeaf78ff, 0xfeb179ff, 0xfeb37bff,
  0xfeb57cff, 0xfeb77dff, 0xfeb97fff, 0xfebb80ff, 0xfebc82ff, 0xfebe83ff, 0xfec085ff, 0xfec286ff,
  0xfec488ff, 0xfec689ff, 0xfec78bff, 0xfec98dff, 0xfecb8eff, 0xfdcd90ff, 0xfdcf92ff, 0xfdd193ff,
  0xfdd295ff, 0xfdd497ff, 0xfdd698ff, 0xfdd89aff, 0xfdda9cff, 0xfddc9dff, 0xfddd9fff, 0xfddfa1ff,
  0xfde1a3ff, 0xfce3a5ff, 0xfce5a6ff, 0xfce6a8ff, 0xfce8aaff, 0xfceaacff, 0xfcecaeff, 0xfceeb0ff,
  0xfcf0b1ff, 0xfcf1b3ff, 0xfcf3b5ff, 0xfcf5b7ff, 0xfbf7b9ff, 0xfbf9bbff, 0xfbfabdff, 0xfbfcbfff,
]

export const Plasma3     = [0x0c0786ff, 0xca4678ff, 0xeff821ff]
export const Plasma4     = [0x0c0786ff, 0x9b179eff, 0xec7853ff, 0xeff821ff]
export const Plasma5     = [0x0c0786ff, 0x7c02a7ff, 0xca4678ff, 0xf79341ff, 0xeff821ff]
export const Plasma6     = [0x0c0786ff, 0x6a00a7ff, 0xb02a8fff, 0xe06461ff, 0xfca635ff, 0xeff821ff]
export const Plasma7     = [0x0c0786ff, 0x5c00a5ff, 0x9b179eff, 0xca4678ff, 0xec7853ff, 0xfdb22fff, 0xeff821ff]
export const Plasma8     = [0x0c0786ff, 0x5201a3ff, 0x8908a5ff, 0xb83289ff, 0xda5a68ff, 0xf38748ff, 0xfdbb2bff, 0xeff821ff]
export const Plasma9     = [0x0c0786ff, 0x4a02a0ff, 0x7c02a7ff, 0xa82296ff, 0xca4678ff, 0xe56b5cff, 0xf79341ff, 0xfdc328ff, 0xeff821ff]
export const Plasma10    = [0x0c0786ff, 0x45039eff, 0x7200a8ff, 0x9b179eff, 0xbc3685ff, 0xd7566cff, 0xec7853ff, 0xfa9d3aff, 0xfcc726ff, 0xeff821ff]
export const Plasma11    = [0x0c0786ff, 0x40039cff, 0x6a00a7ff, 0x8f0da3ff, 0xb02a8fff, 0xca4678ff, 0xe06461ff, 0xf1824cff, 0xfca635ff, 0xfccc25ff, 0xeff821ff]
export const Plasma256   = [
  0x0c0786ff, 0x100787ff, 0x130689ff, 0x15068aff, 0x18068bff, 0x1b068cff, 0x1d068dff, 0x1f058eff,
  0x21058fff, 0x230590ff, 0x250591ff, 0x270592ff, 0x290593ff, 0x2b0594ff, 0x2d0494ff, 0x2f0495ff,
  0x310496ff, 0x330497ff, 0x340498ff, 0x360498ff, 0x380499ff, 0x3a049aff, 0x3b039aff, 0x3d039bff,
  0x3f039cff, 0x40039cff, 0x42039dff, 0x44039eff, 0x45039eff, 0x47029fff, 0x49029fff, 0x4a02a0ff,
  0x4c02a1ff, 0x4e02a1ff, 0x4f02a2ff, 0x5101a2ff, 0x5201a3ff, 0x5401a3ff, 0x5601a3ff, 0x5701a4ff,
  0x5901a4ff, 0x5a00a5ff, 0x5c00a5ff, 0x5e00a5ff, 0x5f00a6ff, 0x6100a6ff, 0x6200a6ff, 0x6400a7ff,
  0x6500a7ff, 0x6700a7ff, 0x6800a7ff, 0x6a00a7ff, 0x6c00a8ff, 0x6d00a8ff, 0x6f00a8ff, 0x7000a8ff,
  0x7200a8ff, 0x7300a8ff, 0x7500a8ff, 0x7601a8ff, 0x7801a8ff, 0x7901a8ff, 0x7b02a8ff, 0x7c02a7ff,
  0x7e03a7ff, 0x7f03a7ff, 0x8104a7ff, 0x8204a7ff, 0x8405a6ff, 0x8506a6ff, 0x8607a6ff, 0x8807a5ff,
  0x8908a5ff, 0x8b09a4ff, 0x8c0aa4ff, 0x8e0ca4ff, 0x8f0da3ff, 0x900ea3ff, 0x920fa2ff, 0x9310a1ff,
  0x9511a1ff, 0x9612a0ff, 0x9713a0ff, 0x99149fff, 0x9a159eff, 0x9b179eff, 0x9d189dff, 0x9e199cff,
  0x9f1a9bff, 0xa01b9bff, 0xa21c9aff, 0xa31d99ff, 0xa41e98ff, 0xa51f97ff, 0xa72197ff, 0xa82296ff,
  0xa92395ff, 0xaa2494ff, 0xac2593ff, 0xad2692ff, 0xae2791ff, 0xaf2890ff, 0xb02a8fff, 0xb12b8fff,
  0xb22c8eff, 0xb42d8dff, 0xb52e8cff, 0xb62f8bff, 0xb7308aff, 0xb83289ff, 0xb93388ff, 0xba3487ff,
  0xbb3586ff, 0xbc3685ff, 0xbd3784ff, 0xbe3883ff, 0xbf3982ff, 0xc03b81ff, 0xc13c80ff, 0xc23d80ff,
  0xc33e7fff, 0xc43f7eff, 0xc5407dff, 0xc6417cff, 0xc7427bff, 0xc8447aff, 0xc94579ff, 0xca4678ff,
  0xcb4777ff, 0xcc4876ff, 0xcd4975ff, 0xce4a75ff, 0xcf4b74ff, 0xd04d73ff, 0xd14e72ff, 0xd14f71ff,
  0xd25070ff, 0xd3516fff, 0xd4526eff, 0xd5536dff, 0xd6556dff, 0xd7566cff, 0xd7576bff, 0xd8586aff,
  0xd95969ff, 0xda5a68ff, 0xdb5b67ff, 0xdc5d66ff, 0xdc5e66ff, 0xdd5f65ff, 0xde6064ff, 0xdf6163ff,
  0xdf6262ff, 0xe06461ff, 0xe16560ff, 0xe26660ff, 0xe3675fff, 0xe3685eff, 0xe46a5dff, 0xe56b5cff,
  0xe56c5bff, 0xe66d5aff, 0xe76e5aff, 0xe87059ff, 0xe87158ff, 0xe97257ff, 0xea7356ff, 0xea7455ff,
  0xeb7654ff, 0xec7754ff, 0xec7853ff, 0xed7952ff, 0xed7b51ff, 0xee7c50ff, 0xef7d4fff, 0xef7e4eff,
  0xf0804dff, 0xf0814dff, 0xf1824cff, 0xf2844bff, 0xf2854aff, 0xf38649ff, 0xf38748ff, 0xf48947ff,
  0xf48a47ff, 0xf58b46ff, 0xf58d45ff, 0xf68e44ff, 0xf68f43ff, 0xf69142ff, 0xf79241ff, 0xf79341ff,
  0xf89540ff, 0xf8963fff, 0xf8983eff, 0xf9993dff, 0xf99a3cff, 0xfa9c3bff, 0xfa9d3aff, 0xfa9f3aff,
  0xfaa039ff, 0xfba238ff, 0xfba337ff, 0xfba436ff, 0xfca635ff, 0xfca735ff, 0xfca934ff, 0xfcaa33ff,
  0xfcac32ff, 0xfcad31ff, 0xfdaf31ff, 0xfdb030ff, 0xfdb22fff, 0xfdb32eff, 0xfdb52dff, 0xfdb62dff,
  0xfdb82cff, 0xfdb92bff, 0xfdbb2bff, 0xfdbc2aff, 0xfdbe29ff, 0xfdc029ff, 0xfdc128ff, 0xfdc328ff,
  0xfdc427ff, 0xfdc626ff, 0xfcc726ff, 0xfcc926ff, 0xfccb25ff, 0xfccc25ff, 0xfcce25ff, 0xfbd024ff,
  0xfbd124ff, 0xfbd324ff, 0xfad524ff, 0xfad624ff, 0xfad824ff, 0xf9d924ff, 0xf9db24ff, 0xf8dd24ff,
  0xf8df24ff, 0xf7e024ff, 0xf7e225ff, 0xf6e425ff, 0xf6e525ff, 0xf5e726ff, 0xf5e926ff, 0xf4ea26ff,
  0xf3ec26ff, 0xf3ee26ff, 0xf2f026ff, 0xf2f126ff, 0xf1f326ff, 0xf0f525ff, 0xf0f623ff, 0xeff821ff,
]

export const Viridis3    = [0x440154ff, 0x208f8cff, 0xfde724ff]
export const Viridis4    = [0x440154ff, 0x30678dff, 0x35b778ff, 0xfde724ff]
export const Viridis5    = [0x440154ff, 0x3b518aff, 0x208f8cff, 0x5bc862ff, 0xfde724ff]
export const Viridis6    = [0x440154ff, 0x404387ff, 0x29788eff, 0x22a784ff, 0x79d151ff, 0xfde724ff]
export const Viridis7    = [0x440154ff, 0x443982ff, 0x30678dff, 0x208f8cff, 0x35b778ff, 0x8dd644ff, 0xfde724ff]
export const Viridis8    = [0x440154ff, 0x46317eff, 0x365a8cff, 0x277e8eff, 0x1ea087ff, 0x49c16dff, 0x9dd93aff, 0xfde724ff]
export const Viridis9    = [0x440154ff, 0x472b7aff, 0x3b518aff, 0x2c718eff, 0x208f8cff, 0x27ad80ff, 0x5bc862ff, 0xaadb32ff, 0xfde724ff]
export const Viridis10   = [0x440154ff, 0x472777ff, 0x3e4989ff, 0x30678dff, 0x25828eff, 0x1e9c89ff, 0x35b778ff, 0x6bcd59ff, 0xb2dd2cff, 0xfde724ff]
export const Viridis11   = [0x440154ff, 0x482374ff, 0x404387ff, 0x345e8dff, 0x29788eff, 0x208f8cff, 0x22a784ff, 0x42be71ff, 0x79d151ff, 0xbade27ff, 0xfde724ff]
export const Viridis256  = [
  0x440154ff, 0x440255ff, 0x440357ff, 0x450558ff, 0x45065aff, 0x45085bff, 0x46095cff, 0x460b5eff,
  0x460c5fff, 0x460e61ff, 0x470f62ff, 0x471163ff, 0x471265ff, 0x471466ff, 0x471567ff, 0x471669ff,
  0x47186aff, 0x48196bff, 0x481a6cff, 0x481c6eff, 0x481d6fff, 0x481e70ff, 0x482071ff, 0x482172ff,
  0x482273ff, 0x482374ff, 0x472575ff, 0x472676ff, 0x472777ff, 0x472878ff, 0x472a79ff, 0x472b7aff,
  0x472c7bff, 0x462d7cff, 0x462f7cff, 0x46307dff, 0x46317eff, 0x45327fff, 0x45347fff, 0x453580ff,
  0x453681ff, 0x443781ff, 0x443982ff, 0x433a83ff, 0x433b83ff, 0x433c84ff, 0x423d84ff, 0x423e85ff,
  0x424085ff, 0x414186ff, 0x414286ff, 0x404387ff, 0x404487ff, 0x3f4587ff, 0x3f4788ff, 0x3e4888ff,
  0x3e4989ff, 0x3d4a89ff, 0x3d4b89ff, 0x3d4c89ff, 0x3c4d8aff, 0x3c4e8aff, 0x3b508aff, 0x3b518aff,
  0x3a528bff, 0x3a538bff, 0x39548bff, 0x39558bff, 0x38568bff, 0x38578cff, 0x37588cff, 0x37598cff,
  0x365a8cff, 0x365b8cff, 0x355c8cff, 0x355d8cff, 0x345e8dff, 0x345f8dff, 0x33608dff, 0x33618dff,
  0x32628dff, 0x32638dff, 0x31648dff, 0x31658dff, 0x31668dff, 0x30678dff, 0x30688dff, 0x2f698dff,
  0x2f6a8dff, 0x2e6b8eff, 0x2e6c8eff, 0x2e6d8eff, 0x2d6e8eff, 0x2d6f8eff, 0x2c708eff, 0x2c718eff,
  0x2c728eff, 0x2b738eff, 0x2b748eff, 0x2a758eff, 0x2a768eff, 0x2a778eff, 0x29788eff, 0x29798eff,
  0x287a8eff, 0x287a8eff, 0x287b8eff, 0x277c8eff, 0x277d8eff, 0x277e8eff, 0x267f8eff, 0x26808eff,
  0x26818eff, 0x25828eff, 0x25838dff, 0x24848dff, 0x24858dff, 0x24868dff, 0x23878dff, 0x23888dff,
  0x23898dff, 0x22898dff, 0x228a8dff, 0x228b8dff, 0x218c8dff, 0x218d8cff, 0x218e8cff, 0x208f8cff,
  0x20908cff, 0x20918cff, 0x1f928cff, 0x1f938bff, 0x1f948bff, 0x1f958bff, 0x1f968bff, 0x1e978aff,
  0x1e988aff, 0x1e998aff, 0x1e998aff, 0x1e9a89ff, 0x1e9b89ff, 0x1e9c89ff, 0x1e9d88ff, 0x1e9e88ff,
  0x1e9f88ff, 0x1ea087ff, 0x1fa187ff, 0x1fa286ff, 0x1fa386ff, 0x20a485ff, 0x20a585ff, 0x21a685ff,
  0x21a784ff, 0x22a784ff, 0x23a883ff, 0x23a982ff, 0x24aa82ff, 0x25ab81ff, 0x26ac81ff, 0x27ad80ff,
  0x28ae7fff, 0x29af7fff, 0x2ab07eff, 0x2bb17dff, 0x2cb17dff, 0x2eb27cff, 0x2fb37bff, 0x30b47aff,
  0x32b57aff, 0x33b679ff, 0x35b778ff, 0x36b877ff, 0x38b976ff, 0x39b976ff, 0x3bba75ff, 0x3dbb74ff,
  0x3ebc73ff, 0x40bd72ff, 0x42be71ff, 0x44be70ff, 0x45bf6fff, 0x47c06eff, 0x49c16dff, 0x4bc26cff,
  0x4dc26bff, 0x4fc369ff, 0x51c468ff, 0x53c567ff, 0x55c666ff, 0x57c665ff, 0x59c764ff, 0x5bc862ff,
  0x5ec961ff, 0x60c960ff, 0x62ca5fff, 0x64cb5dff, 0x67cc5cff, 0x69cc5bff, 0x6bcd59ff, 0x6dce58ff,
  0x70ce56ff, 0x72cf55ff, 0x74d054ff, 0x77d052ff, 0x79d151ff, 0x7cd24fff, 0x7ed24eff, 0x81d34cff,
  0x83d34bff, 0x86d449ff, 0x88d547ff, 0x8bd546ff, 0x8dd644ff, 0x90d643ff, 0x92d741ff, 0x95d73fff,
  0x97d83eff, 0x9ad83cff, 0x9dd93aff, 0x9fd938ff, 0xa2da37ff, 0xa5da35ff, 0xa7db33ff, 0xaadb32ff,
  0xaddc30ff, 0xafdc2eff, 0xb2dd2cff, 0xb5dd2bff, 0xb7dd29ff, 0xbade27ff, 0xbdde26ff, 0xbfdf24ff,
  0xc2df22ff, 0xc5df21ff, 0xc7e01fff, 0xcae01eff, 0xcde01dff, 0xcfe11cff, 0xd2e11bff, 0xd4e11aff,
  0xd7e219ff, 0xdae218ff, 0xdce218ff, 0xdfe318ff, 0xe1e318ff, 0xe4e318ff, 0xe7e419ff, 0xe9e419ff,
  0xece41aff, 0xeee51bff, 0xf1e51cff, 0xf3e51eff, 0xf6e61fff, 0xf8e621ff, 0xfae622ff, 0xfde724ff,
]

export const Cividis3   = [0x00204cff, 0x7b7b78ff, 0xffe945ff]
export const Cividis4   = [0x00204cff, 0x565c6cff, 0xa69c75ff, 0xffe945ff]
export const Cividis5   = [0x00204cff, 0x404c6bff, 0x7b7b78ff, 0xbcae6eff, 0xffe945ff]
export const Cividis6   = [0x00204cff, 0x31446bff, 0x666870ff, 0x958f78ff, 0xcab969ff, 0xffe945ff]
export const Cividis7   = [0x00204cff, 0x223d6cff, 0x565c6cff, 0x7b7b78ff, 0xa69c75ff, 0xd3c065ff, 0xffe945ff]
export const Cividis8   = [0x00204cff, 0x15396dff, 0x49536bff, 0x6c6d72ff, 0x8d8878ff, 0xb2a672ff, 0xd9c661ff, 0xffe945ff]
export const Cividis9   = [0x00204cff, 0x01356eff, 0x404c6bff, 0x5f636eff, 0x7b7b78ff, 0x9b9377ff, 0xbcae6eff, 0xdfcb5dff, 0xffe945ff]
export const Cividis10  = [0x00204cff, 0x00336eff, 0x37476bff, 0x565c6cff, 0x6f7073ff, 0x898578ff, 0xa69c75ff, 0xc3b46cff, 0xe3cd5bff, 0xffe945ff]
export const Cividis11  = [0x00204cff, 0x00316fff, 0x31446bff, 0x4d556bff, 0x666870ff, 0x7b7b78ff, 0x958f78ff, 0xaea373ff, 0xcab969ff, 0xe6d059ff, 0xffe945ff]
export const Cividis256 = [
  0x00204cff, 0x00204eff, 0x002150ff, 0x002251ff, 0x002353ff, 0x002355ff, 0x002456ff, 0x002558ff,
  0x00265aff, 0x00265bff, 0x00275dff, 0x00285fff, 0x002861ff, 0x002963ff, 0x002a64ff, 0x002a66ff,
  0x002b68ff, 0x002c6aff, 0x002d6cff, 0x002d6dff, 0x002e6eff, 0x002e6fff, 0x002f6fff, 0x002f6fff,
  0x00306fff, 0x00316fff, 0x00316fff, 0x00326eff, 0x00336eff, 0x00346eff, 0x00346eff, 0x01356eff,
  0x06366eff, 0x0a376dff, 0x0e376dff, 0x12386dff, 0x15396dff, 0x17396dff, 0x1a3a6cff, 0x1c3b6cff,
  0x1e3c6cff, 0x203c6cff, 0x223d6cff, 0x243e6cff, 0x263e6cff, 0x273f6cff, 0x29406bff, 0x2b416bff,
  0x2c416bff, 0x2e426bff, 0x2f436bff, 0x31446bff, 0x32446bff, 0x33456bff, 0x35466bff, 0x36466bff,
  0x37476bff, 0x38486bff, 0x3a496bff, 0x3b496bff, 0x3c4a6bff, 0x3d4b6bff, 0x3e4b6bff, 0x404c6bff,
  0x414d6bff, 0x424e6bff, 0x434e6bff, 0x444f6bff, 0x45506bff, 0x46506bff, 0x47516bff, 0x48526bff,
  0x49536bff, 0x4a536bff, 0x4b546bff, 0x4c556bff, 0x4d556bff, 0x4e566bff, 0x4f576cff, 0x50586cff,
  0x51586cff, 0x52596cff, 0x535a6cff, 0x545a6cff, 0x555b6cff, 0x565c6cff, 0x575d6dff, 0x585d6dff,
  0x595e6dff, 0x5a5f6dff, 0x5b5f6dff, 0x5c606dff, 0x5d616eff, 0x5e626eff, 0x5f626eff, 0x5f636eff,
  0x60646eff, 0x61656fff, 0x62656fff, 0x63666fff, 0x64676fff, 0x65676fff, 0x666870ff, 0x676970ff,
  0x686a70ff, 0x686a70ff, 0x696b71ff, 0x6a6c71ff, 0x6b6d71ff, 0x6c6d72ff, 0x6d6e72ff, 0x6e6f72ff,
  0x6f6f72ff, 0x6f7073ff, 0x707173ff, 0x717273ff, 0x727274ff, 0x737374ff, 0x747475ff, 0x757575ff,
  0x757575ff, 0x767676ff, 0x777776ff, 0x787876ff, 0x797877ff, 0x7a7977ff, 0x7b7a77ff, 0x7b7b78ff,
  0x7c7b78ff, 0x7d7c78ff, 0x7e7d78ff, 0x7f7e78ff, 0x807e78ff, 0x817f78ff, 0x828078ff, 0x838178ff,
  0x848178ff, 0x858278ff, 0x868378ff, 0x878478ff, 0x888578ff, 0x898578ff, 0x8a8678ff, 0x8b8778ff,
  0x8c8878ff, 0x8d8878ff, 0x8e8978ff, 0x8f8a78ff, 0x908b78ff, 0x918c78ff, 0x928c78ff, 0x938d78ff,
  0x948e78ff, 0x958f78ff, 0x968f77ff, 0x979077ff, 0x989177ff, 0x999277ff, 0x9a9377ff, 0x9b9377ff,
  0x9c9477ff, 0x9d9577ff, 0x9e9676ff, 0x9f9776ff, 0xa09876ff, 0xa19876ff, 0xa29976ff, 0xa39a75ff,
  0xa49b75ff, 0xa59c75ff, 0xa69c75ff, 0xa79d75ff, 0xa89e74ff, 0xa99f74ff, 0xaaa074ff, 0xaba174ff,
  0xaca173ff, 0xada273ff, 0xaea373ff, 0xafa473ff, 0xb0a572ff, 0xb1a672ff, 0xb2a672ff, 0xb4a771ff,
  0xb5a871ff, 0xb6a971ff, 0xb7aa70ff, 0xb8ab70ff, 0xb9ab70ff, 0xbaac6fff, 0xbbad6fff, 0xbcae6eff,
  0xbdaf6eff, 0xbeb06eff, 0xbfb16dff, 0xc0b16dff, 0xc1b26cff, 0xc2b36cff, 0xc3b46cff, 0xc5b56bff,
  0xc6b66bff, 0xc7b76aff, 0xc8b86aff, 0xc9b869ff, 0xcab969ff, 0xcbba68ff, 0xccbb68ff, 0xcdbc67ff,
  0xcebd67ff, 0xd0be66ff, 0xd1bf66ff, 0xd2c065ff, 0xd3c065ff, 0xd4c164ff, 0xd5c263ff, 0xd6c363ff,
  0xd7c462ff, 0xd8c561ff, 0xd9c661ff, 0xdbc760ff, 0xdcc860ff, 0xddc95fff, 0xdeca5eff, 0xdfcb5dff,
  0xe0cb5dff, 0xe1cc5cff, 0xe3cd5bff, 0xe4ce5bff, 0xe5cf5aff, 0xe6d059ff, 0xe7d158ff, 0xe8d257ff,
  0xe9d356ff, 0xebd456ff, 0xecd555ff, 0xedd654ff, 0xeed753ff, 0xefd852ff, 0xf0d951ff, 0xf1da50ff,
  0xf3db4fff, 0xf4dc4eff, 0xf5dd4dff, 0xf6de4cff, 0xf7df4bff, 0xf9e049ff, 0xfae048ff, 0xfbe147ff,
  0xfce246ff, 0xfde345ff, 0xffe443ff, 0xffe542ff, 0xffe642ff, 0xffe743ff, 0xffe844ff, 0xffe945ff,
]

export const Turbo3   = [0x30123bff, 0xa1fc3dff, 0x7a0402]
export const Turbo4   = [0x30123bff, 0x1ae4b6ff, 0xf9ba38ff, 0x7a0402]
export const Turbo5   = [0x30123bff, 0x2ab9edff, 0xa1fc3dff, 0xfb8022ff, 0x7a0402]
export const Turbo6   = [0x30123bff, 0x3e9bfeff, 0x46f783ff, 0xe1dc37ff, 0xef5a11ff, 0x7a0402]
export const Turbo7   = [0x30123bff, 0x4584f9ff, 0x1ae4b6ff, 0xa1fc3dff, 0xf9ba38ff, 0xe5460aff, 0x7a0402]
export const Turbo8   = [0x30123bff, 0x4675edff, 0x1ccdd7ff, 0x61fc6cff, 0xcfea34ff, 0xfe9b2dff, 0xdb3a07ff, 0x7a0402]
export const Turbo9   = [0x30123bff, 0x4668e0ff, 0x2ab9edff, 0x2ff09aff, 0xa1fc3dff, 0xecd139ff, 0xfb8022ff, 0xd23005ff, 0x7a0402]
export const Turbo10  = [0x30123bff, 0x4560d6ff, 0x36a8f9ff, 0x1ae4b6ff, 0x71fd5fff, 0xc5ef33ff, 0xf9ba38ff, 0xf66b18ff, 0xcb2b03ff, 0x7a0402]
export const Turbo11  = [0x30123bff, 0x4458cbff, 0x3e9bfeff, 0x18d5ccff, 0x46f783ff, 0xa1fc3dff, 0xe1dc37ff, 0xfda631ff, 0xef5a11ff, 0xc52602ff, 0x7a0402]
export const Turbo256 = [
  0x30123bff, 0x311542ff, 0x32184aff, 0x341b51ff, 0x351e58ff, 0x36215fff, 0x372365ff, 0x38266cff,
  0x392972ff, 0x3a2c79ff, 0x3b2f7fff, 0x3c3285ff, 0x3c358bff, 0x3d3791ff, 0x3e3a96ff, 0x3f3d9cff,
  0x4040a1ff, 0x4043a6ff, 0x4145abff, 0x4148b0ff, 0x424bb5ff, 0x434ebaff, 0x4350beff, 0x4353c2ff,
  0x4456c7ff, 0x4458cbff, 0x455bceff, 0x455ed2ff, 0x4560d6ff, 0x4563d9ff, 0x4666ddff, 0x4668e0ff,
  0x466be3ff, 0x466de6ff, 0x4670e8ff, 0x4673ebff, 0x4675edff, 0x4678f0ff, 0x467af2ff, 0x467df4ff,
  0x467ff6ff, 0x4682f8ff, 0x4584f9ff, 0x4587fbff, 0x4589fcff, 0x448cfdff, 0x438efdff, 0x4291feff,
  0x4193feff, 0x4096feff, 0x3f98feff, 0x3e9bfeff, 0x3c9dfdff, 0x3ba0fcff, 0x39a2fcff, 0x38a5fbff,
  0x36a8f9ff, 0x34aaf8ff, 0x33acf6ff, 0x31aff5ff, 0x2fb1f3ff, 0x2db4f1ff, 0x2bb6efff, 0x2ab9edff,
  0x28bbebff, 0x26bde9ff, 0x25c0e6ff, 0x23c2e4ff, 0x21c4e1ff, 0x20c6dfff, 0x1ec9dcff, 0x1dcbdaff,
  0x1ccdd7ff, 0x1bcfd4ff, 0x1ad1d2ff, 0x19d3cfff, 0x18d5ccff, 0x18d7caff, 0x17d9c7ff, 0x17dac4ff,
  0x17dcc2ff, 0x17debfff, 0x18e0bdff, 0x18e1baff, 0x19e3b8ff, 0x1ae4b6ff, 0x1be5b4ff, 0x1de7b1ff,
  0x1ee8afff, 0x20e9acff, 0x22eba9ff, 0x24eca6ff, 0x27eda3ff, 0x29eea0ff, 0x2cef9dff, 0x2ff09aff,
  0x32f197ff, 0x35f394ff, 0x38f491ff, 0x3bf48dff, 0x3ff58aff, 0x42f687ff, 0x46f783ff, 0x4af880ff,
  0x4df97cff, 0x51f979ff, 0x55fa76ff, 0x59fb72ff, 0x5dfb6fff, 0x61fc6cff, 0x65fc68ff, 0x69fd65ff,
  0x6dfd62ff, 0x71fd5fff, 0x74fe5cff, 0x78fe59ff, 0x7cfe56ff, 0x80fe53ff, 0x84fe50ff, 0x87fe4dff,
  0x8bfe4bff, 0x8efe48ff, 0x92fe46ff, 0x95fe44ff, 0x98fe42ff, 0x9bfd40ff, 0x9efd3eff, 0xa1fc3dff,
  0xa4fc3bff, 0xa6fb3aff, 0xa9fb39ff, 0xacfa37ff, 0xaef937ff, 0xb1f836ff, 0xb3f835ff, 0xb6f735ff,
  0xb9f534ff, 0xbbf434ff, 0xbef334ff, 0xc0f233ff, 0xc3f133ff, 0xc5ef33ff, 0xc8ee33ff, 0xcaed33ff,
  0xcdeb34ff, 0xcfea34ff, 0xd1e834ff, 0xd4e735ff, 0xd6e535ff, 0xd8e335ff, 0xdae236ff, 0xdde036ff,
  0xdfde36ff, 0xe1dc37ff, 0xe3da37ff, 0xe5d838ff, 0xe7d738ff, 0xe8d538ff, 0xead339ff, 0xecd139ff,
  0xedcf39ff, 0xefcd39ff, 0xf0cb3aff, 0xf2c83aff, 0xf3c63aff, 0xf4c43aff, 0xf6c23aff, 0xf7c039ff,
  0xf8be39ff, 0xf9bc39ff, 0xf9ba38ff, 0xfab737ff, 0xfbb537ff, 0xfbb336ff, 0xfcb035ff, 0xfcae34ff,
  0xfdab33ff, 0xfda932ff, 0xfda631ff, 0xfda330ff, 0xfea12fff, 0xfe9e2eff, 0xfe9b2dff, 0xfe982cff,
  0xfd952bff, 0xfd9229ff, 0xfd8f28ff, 0xfd8c27ff, 0xfc8926ff, 0xfc8624ff, 0xfb8323ff, 0xfb8022ff,
  0xfa7d20ff, 0xfa7a1fff, 0xf9771eff, 0xf8741cff, 0xf7711bff, 0xf76e1aff, 0xf66b18ff, 0xf56817ff,
  0xf46516ff, 0xf36315ff, 0xf26014ff, 0xf15d13ff, 0xef5a11ff, 0xee5810ff, 0xed550fff, 0xec520eff,
  0xea500dff, 0xe94d0dff, 0xe84b0cff, 0xe6490bff, 0xe5460aff, 0xe3440aff, 0xe24209ff, 0xe04008ff,
  0xde3e08ff, 0xdd3c07ff, 0xdb3a07ff, 0xd93806ff, 0xd73606ff, 0xd63405ff, 0xd43205ff, 0xd23005ff,
  0xd02f04ff, 0xce2d04ff, 0xcb2b03ff, 0xc92903ff, 0xc72803ff, 0xc52602ff, 0xc32402ff, 0xc02302ff,
  0xbe2102ff, 0xbb1f01ff, 0xb91e01ff, 0xb61c01ff, 0xb41b01ff, 0xb11901ff, 0xae1801ff, 0xac1601ff,
  0xa91501ff, 0xa61401ff, 0xa31201ff, 0xa01101ff, 0x9d1001ff, 0x9a0e01ff, 0x970d01ff, 0x940c01ff,
  0x910b01ff, 0x8e0a01ff, 0x8b0901ff, 0x870801ff, 0x840701ff, 0x810602ff, 0x7d0502ff, 0x7a0402ff,
]

export const Accent3     = [0x7fc97fff, 0xbeaed4ff, 0xfdc086ff]
export const Accent4     = [...Accent3, 0xffff99ff]
export const Accent5     = [...Accent4, 0x386cb0ff]
export const Accent6     = [...Accent5, 0xf0027fff]
export const Accent7     = [...Accent6, 0xbf5b17ff]
export const Accent8     = [...Accent7, 0x666666ff]

export const Dark2_3     = [0x1b9e77ff, 0xd95f02ff, 0x7570b3ff]
export const Dark2_4     = [...Dark2_3, 0xe7298aff]
export const Dark2_5     = [...Dark2_4, 0x66a61eff]
export const Dark2_6     = [...Dark2_5, 0xe6ab02ff]
export const Dark2_7     = [...Dark2_6, 0xa6761dff]
export const Dark2_8     = [...Dark2_7, 0x666666ff]

export const Paired3     = [0xa6cee3ff, 0x1f78b4ff, 0xb2df8aff]
export const Paired4     = [...Paired3,  0x33a02cff]
export const Paired5     = [...Paired4,  0xfb9a99ff]
export const Paired6     = [...Paired5,  0xe31a1cff]
export const Paired7     = [...Paired6,  0xfdbf6fff]
export const Paired8     = [...Paired7,  0xff7f00ff]
export const Paired9     = [...Paired8,  0xcab2d6ff]
export const Paired10    = [...Paired9,  0x6a3d9aff]
export const Paired11    = [...Paired10, 0xffff99ff]
export const Paired12    = [...Paired11, 0xb15928ff]

export const Pastel1_3   = [0xfbb4aeff, 0xb3cde3ff, 0xccebc5ff]
export const Pastel1_4   = [...Pastel1_3, 0xdecbe4ff]
export const Pastel1_5   = [...Pastel1_4, 0xfed9a6ff]
export const Pastel1_6   = [...Pastel1_5, 0xffffccff]
export const Pastel1_7   = [...Pastel1_6, 0xe5d8bdff]
export const Pastel1_8   = [...Pastel1_7, 0xfddaecff]
export const Pastel1_9   = [...Pastel1_8, 0xf2f2f2ff]

export const Pastel2_3   = [0xb3e2cdff, 0xfdcdacff, 0xcbd5e8ff]
export const Pastel2_4   = [...Pastel2_3, 0xf4cae4ff]
export const Pastel2_5   = [...Pastel2_4, 0xe6f5c9ff]
export const Pastel2_6   = [...Pastel2_5, 0xfff2aeff]
export const Pastel2_7   = [...Pastel2_6, 0xf1e2ccff]
export const Pastel2_8   = [...Pastel2_7, 0xccccccff]

export const Set1_3      = [0xe41a1cff, 0x377eb8ff, 0x4daf4aff]
export const Set1_4      = [...Set1_3, 0x984ea3ff]
export const Set1_5      = [...Set1_4, 0xff7f00ff]
export const Set1_6      = [...Set1_5, 0xffff33ff]
export const Set1_7      = [...Set1_6, 0xa65628ff]
export const Set1_8      = [...Set1_7, 0xf781bfff]
export const Set1_9      = [...Set1_8, 0x999999ff]

export const Set2_3      = [0x66c2a5ff, 0xfc8d62ff, 0x8da0cbff]
export const Set2_4      = [...Set2_3, 0xe78ac3ff]
export const Set2_5      = [...Set2_4, 0xa6d854ff]
export const Set2_6      = [...Set2_5, 0xffd92fff]
export const Set2_7      = [...Set2_6, 0xe5c494ff]
export const Set2_8      = [...Set2_7, 0xb3b3b3ff]

export const Set3_3      = [0x8dd3c7ff, 0xffffb3ff, 0xbebadaff]
export const Set3_4      = [...Set3_3,  0xfb8072ff]
export const Set3_5      = [...Set3_4,  0x80b1d3ff]
export const Set3_6      = [...Set3_5,  0xfdb462ff]
export const Set3_7      = [...Set3_6,  0xb3de69ff]
export const Set3_8      = [...Set3_7,  0xfccde5ff]
export const Set3_9      = [...Set3_8,  0xd9d9d9ff]
export const Set3_10     = [...Set3_9,  0xbc80bdff]
export const Set3_11     = [...Set3_10, 0xccebc5ff]
export const Set3_12     = [...Set3_11, 0xffed6fff]

export const Category10_3  =  [0x1f77b4ff, 0xff7f0eff, 0x2ca02cff]
export const Category10_4  =  [...Category10_3, 0xd62728ff]
export const Category10_5  =  [...Category10_4, 0x9467bdff]
export const Category10_6  =  [...Category10_5, 0x8c564bff]
export const Category10_7  =  [...Category10_6, 0xe377c2ff]
export const Category10_8  =  [...Category10_7, 0x7f7f7fff]
export const Category10_9  =  [...Category10_8, 0xbcbd22ff]
export const Category10_10 =  [...Category10_9, 0x17becfff]

export const Category20_3  =  [0x1f77b4ff, 0xaec7e8ff, 0xff7f0eff]
export const Category20_4  =  [...Category20_3,  0xffbb78ff]
export const Category20_5  =  [...Category20_4,  0x2ca02cff]
export const Category20_6  =  [...Category20_5,  0x98df8aff]
export const Category20_7  =  [...Category20_6,  0xd62728ff]
export const Category20_8  =  [...Category20_7,  0xff9896ff]
export const Category20_9  =  [...Category20_8,  0x9467bdff]
export const Category20_10 =  [...Category20_9,  0xc5b0d5ff]
export const Category20_11 =  [...Category20_10, 0x8c564bff]
export const Category20_12 =  [...Category20_11, 0xc49c94ff]
export const Category20_13 =  [...Category20_12, 0xe377c2ff]
export const Category20_14 =  [...Category20_13, 0xf7b6d2ff]
export const Category20_15 =  [...Category20_14, 0x7f7f7fff]
export const Category20_16 =  [...Category20_15, 0xc7c7c7ff]
export const Category20_17 =  [...Category20_16, 0xbcbd22ff]
export const Category20_18 =  [...Category20_17, 0xdbdb8dff]
export const Category20_19 =  [...Category20_18, 0x17becfff]
export const Category20_20 =  [...Category20_19, 0x9edae5ff]

export const Category20b_3  = [0x393b79ff, 0x5254a3ff, 0x6b6ecfff]
export const Category20b_4  = [...Category20b_3,  0x9c9edeff]
export const Category20b_5  = [...Category20b_4,  0x637939ff]
export const Category20b_6  = [...Category20b_5,  0x8ca252ff]
export const Category20b_7  = [...Category20b_6,  0xb5cf6bff]
export const Category20b_8  = [...Category20b_7,  0xcedb9cff]
export const Category20b_9  = [...Category20b_8,  0x8c6d31ff]
export const Category20b_10 = [...Category20b_9,  0xbd9e39ff]
export const Category20b_11 = [...Category20b_10, 0xe7ba52ff]
export const Category20b_12 = [...Category20b_11, 0xe7cb94ff]
export const Category20b_13 = [...Category20b_12, 0x843c39ff]
export const Category20b_14 = [...Category20b_13, 0xad494aff]
export const Category20b_15 = [...Category20b_14, 0xd6616bff]
export const Category20b_16 = [...Category20b_15, 0xe7969cff]
export const Category20b_17 = [...Category20b_16, 0x7b4173ff]
export const Category20b_18 = [...Category20b_17, 0xa55194ff]
export const Category20b_19 = [...Category20b_18, 0xce6dbdff]
export const Category20b_20 = [...Category20b_19, 0xde9ed6ff]

export const Category20c_3  = [0x3182bdff, 0x6baed6ff, 0x9ecae1ff]
export const Category20c_4  = [...Category20c_3,  0xc6dbefff]
export const Category20c_5  = [...Category20c_4,  0xe6550dff]
export const Category20c_6  = [...Category20c_5,  0xfd8d3cff]
export const Category20c_7  = [...Category20c_6,  0xfdae6bff]
export const Category20c_8  = [...Category20c_7,  0xfdd0a2ff]
export const Category20c_9  = [...Category20c_8,  0x31a354ff]
export const Category20c_10 = [...Category20c_9,  0x74c476ff]
export const Category20c_11 = [...Category20c_10, 0xa1d99bff]
export const Category20c_12 = [...Category20c_11, 0xc7e9c0ff]
export const Category20c_13 = [...Category20c_12, 0x756bb1ff]
export const Category20c_14 = [...Category20c_13, 0x9e9ac8ff]
export const Category20c_15 = [...Category20c_14, 0xbcbddcff]
export const Category20c_16 = [...Category20c_15, 0xdadaebff]
export const Category20c_17 = [...Category20c_16, 0x636363ff]
export const Category20c_18 = [...Category20c_17, 0x969696ff]
export const Category20c_19 = [...Category20c_18, 0xbdbdbdff]
export const Category20c_20 = [...Category20c_19, 0xd9d9d9ff]

export const Colorblind3 = [0x0072b2ff, 0xe69f00ff, 0xf0e442ff]
export const Colorblind4 = [...Colorblind3, 0x009e73ff]
export const Colorblind5 = [...Colorblind4, 0x56b4e9ff]
export const Colorblind6 = [...Colorblind5, 0xd55e00ff]
export const Colorblind7 = [...Colorblind6, 0xcc79a7ff]
export const Colorblind8 = [...Colorblind7, 0x000000ff]

export const Bright3 = [0x4477aaff, 0xee6677ff, 0x228833ff]
export const Bright4 = [...Bright3, 0xccbb44ff]
export const Bright5 = [...Bright4, 0x66cceeff]
export const Bright6 = [...Bright5, 0xaa3377ff]
export const Bright7 = [...Bright6, 0xbbbbbbff]

export const HighContrast3 = [0x004488ff, 0xddaa33ff, 0xbb5566ff]

export const Vibrant3 = [0xee7733ff, 0x0077bbff, 0x33bbeeff]
export const Vibrant4 = [...Vibrant3, 0xee3377ff]
export const Vibrant5 = [...Vibrant4, 0xcc3311ff]
export const Vibrant6 = [...Vibrant5, 0x009988ff]
export const Vibrant7 = [...Vibrant6, 0xbbbbbbff]

export const Muted3 = [0xcc6677ff, 0x332288ff, 0xddcc77ff]
export const Muted4 = [...Muted3, 0x117733ff]
export const Muted5 = [...Muted4, 0x88cceeff]
export const Muted6 = [...Muted5, 0x882255ff]
export const Muted7 = [...Muted6, 0x44aa99ff]
export const Muted8 = [...Muted7, 0x999933ff]
export const Muted9 = [...Muted8, 0xaa4499ff]

export const MediumContrast3 = [0x6699ccff, 0x004488ff, 0xeecc66ff]
export const MediumContrast4 = [...MediumContrast3, 0x994455ff]
export const MediumContrast5 = [...MediumContrast4, 0x997700ff]
export const MediumContrast6 = [...MediumContrast5, 0xee99aaff]

export const PaleTextBackground = [0xbbcceeff, 0xcceeffff, 0xccddaaff, 0xeeeebbff, 0xffccccff, 0xddddddff]

export const DarkText = [0x222255ff, 0x225555ff, 0x225522ff, 0x666633ff, 0x663333ff, 0x555555ff]

export const Light3 = [0x77aaddff, 0xee8866ff, 0xeedd88ff]
export const Light4 = [...Light3, 0xffaabbff]
export const Light5 = [...Light4, 0x99ddffff]
export const Light6 = [...Light5, 0x44bb99ff]
export const Light7 = [...Light6, 0xbbcc33ff]
export const Light8 = [...Light7, 0xaaaa00ff]
export const Light9 = [...Light8, 0xddddddff]

export const Sunset3  = [0x364b9aff, 0xeaecccff, 0xa50026ff]
export const Sunset4  = [0x364b9aff, 0xa5d2e5ff, 0xfdc072ff, 0xa50026ff]
export const Sunset5  = [0x364b9aff, 0x83b8d7ff, 0xeaecccff, 0xf99858ff, 0xa50026ff]
export const Sunset6  = [0x364b9aff, 0x6ea6cdff, 0xc2e4efff, 0xfeda8bff, 0xf67e4bff, 0xa50026ff]
export const Sunset7  = [0x364b9aff, 0x6197c5ff, 0xa5d2e5ff, 0xeaecccff, 0xfdc072ff, 0xed6841ff, 0xa50026ff]
export const Sunset8  = [0x364b9aff, 0x598dc0ff, 0x92c4deff, 0xcde6e5ff, 0xf8df9dff, 0xfcab62ff, 0xe75839ff, 0xa50026ff]
export const Sunset9  = [0x364b9aff, 0x5384bcff, 0x83b8d7ff, 0x87ddebff, 0xeaecccff, 0xfdd081ff, 0xf99858ff, 0xe34d34ff, 0xa50026ff]
export const Sunset10 = [0x364b9aff, 0x4e7fb9ff, 0x77aed1ff, 0xa5d2e5ff, 0xd3e7dfff, 0xf5e2a7ff, 0xfdc072ff, 0xf78951ff, 0xdf4430ff, 0xa50026ff]
export const Sunset11 = [0x364b9aff, 0x4a7bb7ff, 0x6ea6cdff, 0x98cae1ff, 0xc2e4efff, 0xeaecccff, 0xfeda8bff, 0xfdb366ff, 0xf67e4bff, 0xdd3d2dff, 0xa50026ff]

export const BuRd3 = [0x2166acff, 0xf7f7f7ff, 0xb2182bff]
export const BuRd4 = [0x2166acff, 0xbbdaeaff, 0xfac9b0ff, 0xb2182bff]
export const BuRd5 = [0x2166acff, 0x92c5deff, 0xf7f7f7ff, 0xf4a582ff, 0xb2182bfF]
export const BuRd6 = [0x2166acff, 0x72b1d3ff, 0xd8e8f1ff, 0xfbe0d0ff, 0xe8896cff, 0xb2182bff]
export const BuRd7 = [0x2166acff, 0x5da3cbff, 0xbbdaeaff, 0xf7f7f7ff, 0xfac9b0ff, 0xe0775eff, 0xb2182bff]
export const BuRd8 = [0x2166acff, 0x4e9ac6ff, 0xa3cee3ff, 0xe1ecf3ff, 0xfae7dbff, 0xf6b495ff, 0xda6954ff, 0xb2182bff]
export const BuRd9 = [0x2166acff, 0x4393c3ff, 0x92c5deff, 0xd1e5f0ff, 0xf7f7f7ff, 0xfddbc7ff, 0xf4a582ff, 0xd6604dff, 0xb2182bff]

export const TolPRGn3 = [0x762a83ff, 0xf7f7f7ff, 0x1b7837ff]
export const TolPRGn4 = [0x762a83ff, 0xdac4dfff, 0xcae6c1ff, 0x1b7837ff]
export const TolPRGn5 = [0x762a83ff, 0xc2a5cfff, 0xf7f7f7ff, 0xacd39eff, 0x1b7837ff]
export const TolPRGn6 = [0x762a83ff, 0xb18fc0ff, 0xeadbebff, 0xdef1daff, 0x8bc485ff, 0x1b7837ff]
export const TolPRGn7 = [0x762a83ff, 0xa681b7ff, 0xdac4dfff, 0xf7f7f7ff, 0xcae6c1ff, 0x75ba75ff, 0x1b7837ff]
export const TolPRGn8 = [0x762a83ff, 0x9e77b0ff, 0xccb2d6ff, 0xede3eeff, 0xe5f3e2ff, 0xb8dbadff, 0x65b369ff, 0x1b7837ff]
export const TolPRGn9 = [0x762a83ff, 0x9970abff, 0xc2a5cfff, 0xe7d4e8ff, 0xf7f7f7ff, 0xd9f0d3ff, 0xacd39eff, 0x5aae61ff, 0x1b7837ff]

export const TolYlOrBr3 = [0xffffe5ff, 0xfb9a29ff, 0x662506ff]
export const TolYlOrBr4 = [0xffffe5ff, 0xfece65ff, 0xe1640eff, 0x662506ff]
export const TolYlOrBr5 = [0xffffe5ff, 0xfee391ff, 0xfb9a29ff, 0xcc4c02ff, 0x662506ff]
export const TolYlOrBr6 = [0xffffe5ff, 0xfeeba2ff, 0xfdbb47ff, 0xef7818ff, 0xb74202ff, 0x662506ff]
export const TolYlOrBr7 = [0xffffe5ff, 0xfef0adff, 0xfece65ff, 0xfb9a29ff, 0xe1640eff, 0xaa3c03ff, 0x662506ff]
export const TolYlOrBr8 = [0xffffe5ff, 0xfef4b5ff, 0xfeda7eff, 0xfcb23eff, 0xf2821dff, 0xd55607ff, 0xa03703ff, 0x662506ff]
export const TolYlOrBr9 = [0xffffe5ff, 0xfff7bcff, 0xfee391ff, 0xfec44fff, 0xfb9a29ff, 0xec7014ff, 0xcc4c02ff, 0x993404ff, 0x662506ff]

export const Iridescent3  = [0xfefbe9ff, 0xfcf7d5ff, 0xf5f3c1ff]
export const Iridescent4  = [...Iridescent3,  0xeaf0b5ff]
export const Iridescent5  = [...Iridescent4,  0xddecbfff]
export const Iridescent6  = [...Iridescent5,  0xd0e7caff]
export const Iridescent7  = [...Iridescent6,  0xc2e3d2ff]
export const Iridescent8  = [...Iridescent7,  0xb5ddd8ff]
export const Iridescent9  = [...Iridescent8,  0xa8d8dcff]
export const Iridescent10 = [...Iridescent9,  0x9bd2e1ff]
export const Iridescent11 = [...Iridescent10, 0x8dcbe4ff]
export const Iridescent12 = [...Iridescent11, 0x81c4e7ff]
export const Iridescent13 = [...Iridescent12, 0x7bbce7ff]
export const Iridescent14 = [...Iridescent13, 0x7eb2e4ff]
export const Iridescent15 = [...Iridescent14, 0x88a5ddff]
export const Iridescent16 = [...Iridescent15, 0x9398d2ff]
export const Iridescent17 = [...Iridescent16, 0x9b8ac4ff]
export const Iridescent18 = [...Iridescent17, 0x9d7db2ff]
export const Iridescent19 = [...Iridescent18, 0x9a709eff]
export const Iridescent20 = [...Iridescent19, 0x906388ff]
export const Iridescent21 = [...Iridescent20, 0x805770ff]
export const Iridescent22 = [...Iridescent21, 0x684957ff]
export const Iridescent23 = [...Iridescent22, 0x46353aff]

export const TolRainbow3  = [0x1965b0ff, 0xf7f056ff, 0xdc050cff]
export const TolRainbow4  = [0x1965b0ff, 0x4eb265ff, 0xf7f056ff, 0xdc050cff]
export const TolRainbow5  = [0x1965b0ff, 0x7bafdeff, 0x4eb265ff, 0xf7f056ff, 0xdc050cff]
export const TolRainbow6  = [0x1965b0ff, 0x7bafdeff, 0x4eb265ff, 0xcae0abff, 0xf7f056ff, 0xdc050cff]
export const TolRainbow7  = [0x882e72ff, 0x1965b0ff, 0x7bafdeff, 0x4eb265ff, 0xcae0abff, 0xf7f056ff, 0xdc050cff]
export const TolRainbow8  = [0x882e72ff, 0x1965b0ff, 0x7bafdeff, 0x4eb265ff, 0xcae0abff, 0xf7f056ff, 0xee8026ff, 0xdc050cff]
export const TolRainbow9  = [0x882e72ff, 0x1965b0ff, 0x7bafdeff, 0x4eb265ff, 0xcae0abff, 0xf7f056ff, 0xee8026ff, 0xdc050cff, 0x72190eff]
export const TolRainbow10 = [0x882e72ff, 0x1965b0ff, 0x7bafdeff, 0x4eb265ff, 0xcae0abff, 0xf7f056ff, 0xf4a736ff, 0xe8601cff, 0xdc050cff, 0x72190eff]
export const TolRainbow11 = [0x882e72ff, 0x1965b0ff, 0x5289c7ff, 0x7bafdeff, 0x4eb265ff, 0xcae0abff, 0xf7f056ff, 0xf4a736ff, 0xe8601cff, 0xdc050cff, 0x72190eff]
export const TolRainbow12 = [0xd1bbd7ff, 0xaa6f9eff, 0x882e72ff, 0x1965b0ff, 0x5289c7ff, 0x7bafdeff, 0x4eb265ff, 0xcae0abff, 0xf7f056ff, 0xf4a736ff, 0xe8601cff, 0xdc050cff]
export const TolRainbow13 = [0xd1bbd7ff, 0xaa6f9eff, 0x882e72ff, 0x1965b0ff, 0x5289c7ff, 0x7bafdeff, 0x4eb265ff, 0x90c987ff, 0xcae0abff, 0xf7f056ff, 0xf4a736ff, 0xe8601cff, 0xdc050cff]
export const TolRainbow14 = [0xd1bbd7ff, 0xaa6f9eff, 0x882e72ff, 0x1965b0ff, 0x5289c7ff, 0x7bafdeff, 0x4eb265ff, 0x90c987ff, 0xcae0abff, 0xf7f056ff, 0xf6c141ff, 0xf1932dff, 0xe8601cff, 0xdc050cff]
export const TolRainbow15 = [0xd1bbd7ff, 0xaa6f9eff, 0x882e72ff, 0x1965b0ff, 0x5289c7ff, 0x7bafdeff, 0x4eb265ff, 0x90c987ff, 0xcae0abff, 0xf7f056ff, 0xf6c141ff, 0xf1932dff, 0xe8601cff, 0xdc050cff, 0x72190eff]
export const TolRainbow16 = [0xd1bbd7ff, 0xba8db4ff, 0xaa6f9eff, 0x882e72ff, 0x1965b0ff, 0x5289c7ff, 0x7bafdeff, 0x4eb265ff, 0x90c987ff, 0xcae0abff, 0xf7f056ff, 0xf6c141ff, 0xf1932dff, 0xe8601cff, 0xdc050cff, 0x72190eff]
export const TolRainbow17 = [0xd1bbd7ff, 0xba8db4ff, 0xaa6f9eff, 0x994f88ff, 0x882e72ff, 0x1965b0ff, 0x5289c7ff, 0x7bafdeff, 0x4eb265ff, 0x90c987ff, 0xcae0abff, 0xf7f056ff, 0xf6c141ff, 0xf1932dff, 0xe8601cff, 0xdc050cff, 0x72190eff]
export const TolRainbow18 = [0xd1bbd7ff, 0xba8db4ff, 0xaa6f9eff, 0x994f88ff, 0x882e72ff, 0x1965b0ff, 0x5289c7ff, 0x7bafdeff, 0x4eb265ff, 0x90c987ff, 0xcae0abff, 0xf7f056ff, 0xf6c141ff, 0xf1932dff, 0xe8601cff, 0xdc050cff, 0xa5170eff, 0x72190eff]
export const TolRainbow19 = [0xd9cce3ff, 0xcaaccbff, 0xba8db4ff, 0xaa6f9eff, 0x994f88ff, 0x882e72ff, 0x1965b0ff, 0x5289c7ff, 0x7bafdeff, 0x4eb265ff, 0x90c987ff, 0xcae0abff, 0xf7f056ff, 0xf6c141ff, 0xf1932dff, 0xe8601cff, 0xdc050cff, 0xa5170eff, 0x72190eff]
export const TolRainbow20 = [0xd9cce3ff, 0xcaaccbff, 0xba8db4ff, 0xaa6f9eff, 0x994f88ff, 0x882e72ff, 0x1965b0ff, 0x437dbfff, 0x6195cfff, 0x7bafdeff, 0x4eb265ff, 0x90c987ff, 0xcae0abff, 0xf7f056ff, 0xf6c141ff, 0xf1932dff, 0xe8601cff, 0xdc050cff, 0xa5170eff, 0x72190eff]
export const TolRainbow21 = [0xd9cce3ff, 0xcaaccbff, 0xba8db4ff, 0xaa6f9eff, 0x994f88ff, 0x882e72ff, 0x1965b0ff, 0x437dbfff, 0x6195cfff, 0x7bafdeff, 0x4eb265ff, 0x90c987ff, 0xcae0abff, 0xf7f056ff, 0xf7cb45ff, 0xf4a736ff, 0xee8026ff, 0xe65518ff, 0xdc050cff, 0xa5170eff, 0x72190eff]
export const TolRainbow22 = [0xd9cce3ff, 0xcaaccbff, 0xba8db4ff, 0xaa6f9eff, 0x994f88ff, 0x882e72ff, 0x1965b0ff, 0x437dbfff, 0x6195cfff, 0x7bafdeff, 0x4eb265ff, 0x90c987ff, 0xcae0abff, 0xf7f056ff, 0xf7cb45ff, 0xf4a736ff, 0xee8026ff, 0xe65518ff, 0xdc050cff, 0xa5170eff, 0x72190eff, 0x42150aff]
export const TolRainbow23 = [0xe8ecfbff, 0xd9cce3ff, 0xcaaccbff, 0xba8db4ff, 0xaa6f9eff, 0x994f88ff, 0x882e72ff, 0x1965b0ff, 0x437dbfff, 0x6195cfff, 0x7bafdeff, 0x4eb265ff, 0x90c987ff, 0xcae0abff, 0xf7f056ff, 0xf7cb45ff, 0xf4a736ff, 0xee8026ff, 0xe65518ff, 0xdc050cff, 0xa5170eff, 0x72190eff, 0x42150aff]

export type YlGn         = "YlGn3"         | "YlGn4"         | "YlGn5"         | "YlGn6"         | "YlGn7"         | "YlGn8"         | "YlGn9"
export type YlGnBu       = "YlGnBu3"       | "YlGnBu4"       | "YlGnBu5"       | "YlGnBu6"       | "YlGnBu7"       | "YlGnBu8"       | "YlGnBu9"
export type GnBu         = "GnBu3"         | "GnBu4"         | "GnBu5"         | "GnBu6"         | "GnBu7"         | "GnBu8"         | "GnBu9"
export type BuGn         = "BuGn3"         | "BuGn4"         | "BuGn5"         | "BuGn6"         | "BuGn7"         | "BuGn8"         | "BuGn9"
export type PuBuGn       = "PuBuGn3"       | "PuBuGn4"       | "PuBuGn5"       | "PuBuGn6"       | "PuBuGn7"       | "PuBuGn8"       | "PuBuGn9"
export type PuBu         = "PuBu3"         | "PuBu4"         | "PuBu5"         | "PuBu6"         | "PuBu7"         | "PuBu8"         | "PuBu9"
export type BuPu         = "BuPu3"         | "BuPu4"         | "BuPu5"         | "BuPu6"         | "BuPu7"         | "BuPu8"         | "BuPu9"
export type RdPu         = "RdPu3"         | "RdPu4"         | "RdPu5"         | "RdPu6"         | "RdPu7"         | "RdPu8"         | "RdPu9"
export type PuRd         = "PuRd3"         | "PuRd4"         | "PuRd5"         | "PuRd6"         | "PuRd7"         | "PuRd8"         | "PuRd9"
export type OrRd         = "OrRd3"         | "OrRd4"         | "OrRd5"         | "OrRd6"         | "OrRd7"         | "OrRd8"         | "OrRd9"
export type YlOrRd       = "YlOrRd3"       | "YlOrRd4"       | "YlOrRd5"       | "YlOrRd6"       | "YlOrRd7"       | "YlOrRd8"       | "YlOrRd9"
export type YlOrBr       = "YlOrBr3"       | "YlOrBr4"       | "YlOrBr5"       | "YlOrBr6"       | "YlOrBr7"       | "YlOrBr8"       | "YlOrBr9"
export type Purples      = "Purples3"      | "Purples4"      | "Purples5"      | "Purples6"      | "Purples7"      | "Purples8"      | "Purples9"
export type Blues        = "Blues3"        | "Blues4"        | "Blues5"        | "Blues6"        | "Blues7"        | "Blues8"        | "Blues9"
export type Greens       = "Greens3"       | "Greens4"       | "Greens5"       | "Greens6"       | "Greens7"       | "Greens8"       | "Greens9"
export type Oranges      = "Oranges3"      | "Oranges4"      | "Oranges5"      | "Oranges6"      | "Oranges7"      | "Oranges8"      | "Oranges9"
export type Reds         = "Reds3"         | "Reds4"         | "Reds5"         | "Reds6"         | "Reds7"         | "Reds8"         | "Reds9"
export type Greys        = "Greys3"        | "Greys4"        | "Greys5"        | "Greys6"        | "Greys7"        | "Greys8"        | "Greys9"
export type PuOr         = "PuOr3"         | "PuOr4"         | "PuOr5"         | "PuOr6"         | "PuOr7"         | "PuOr8"         | "PuOr9"         | "PuOr10"         | "PuOr11"
export type BrBG         = "BrBG3"         | "BrBG4"         | "BrBG5"         | "BrBG6"         | "BrBG7"         | "BrBG8"         | "BrBG9"         | "BrBG10"         | "BrBG11"
export type PRGn         = "PRGn3"         | "PRGn4"         | "PRGn5"         | "PRGn6"         | "PRGn7"         | "PRGn8"         | "PRGn9"         | "PRGn10"         | "PRGn11"
export type PiYG         = "PiYG3"         | "PiYG4"         | "PiYG5"         | "PiYG6"         | "PiYG7"         | "PiYG8"         | "PiYG9"         | "PiYG10"         | "PiYG11"
export type RdBu         = "RdBu3"         | "RdBu4"         | "RdBu5"         | "RdBu6"         | "RdBu7"         | "RdBu8"         | "RdBu9"         | "RdBu10"         | "RdBu11"
export type RdGy         = "RdGy3"         | "RdGy4"         | "RdGy5"         | "RdGy6"         | "RdGy7"         | "RdGy8"         | "RdGy9"         | "RdGy10"         | "RdGy11"
export type RdYlBu       = "RdYlBu3"       | "RdYlBu4"       | "RdYlBu5"       | "RdYlBu6"       | "RdYlBu7"       | "RdYlBu8"       | "RdYlBu9"       | "RdYlBu10"       | "RdYlBu11"
export type Spectral     = "Spectral3"     | "Spectral4"     | "Spectral5"     | "Spectral6"     | "Spectral7"     | "Spectral8"     | "Spectral9"     | "Spectral10"     | "Spectral11"
export type RdYlGn       = "RdYlGn3"       | "RdYlGn4"       | "RdYlGn5"       | "RdYlGn6"       | "RdYlGn7"       | "RdYlGn8"       | "RdYlGn9"       | "RdYlGn10"       | "RdYlGn11"
export type Accent       = "Accent3"       | "Accent4"       | "Accent5"       | "Accent6"       | "Accent7"       | "Accent8"
export type Dark2        = "Dark2_3"       | "Dark2_4"       | "Dark2_5"       | "Dark2_6"       | "Dark2_7"       | "Dark2_8"
export type Paired       = "Paired3"       | "Paired4"       | "Paired5"       | "Paired6"       | "Paired7"       | "Paired8"       | "Paired9"       | "Paired10"       | "Paired11"       | "Paired12"
export type Pastel1      = "Pastel1_3"     | "Pastel1_4"     | "Pastel1_5"     | "Pastel1_6"     | "Pastel1_7"     | "Pastel1_8"     | "Pastel1_9"
export type Pastel2      = "Pastel2_3"     | "Pastel2_4"     | "Pastel2_5"     | "Pastel2_6"     | "Pastel2_7"     | "Pastel2_8"
export type Set1         = "Set1_3"        | "Set1_4"        | "Set1_5"        | "Set1_6"        | "Set1_7"        | "Set1_8"        | "Set1_9"
export type Set2         = "Set2_3"        | "Set2_4"        | "Set2_5"        | "Set2_6"        | "Set2_7"        | "Set2_8"
export type Set3         = "Set3_3"        | "Set3_4"        | "Set3_5"        | "Set3_6"        | "Set3_7"        | "Set3_8"        | "Set3_9"        | "Set3_10"        | "Set3_11"        | "Set3_12"
export type Bokeh        = "Bokeh3"        | "Bokeh4"        | "Bokeh5"        | "Bokeh6"        | "Bokeh7"        | "Bokeh8"
export type Inferno      = "Inferno3"      | "Inferno4"      | "Inferno5"      | "Inferno6"      | "Inferno7"      | "Inferno8"      | "Inferno9"      | "Inferno10"      | "Inferno11"      | "Inferno256"
export type Magma        = "Magma3"        | "Magma4"        | "Magma5"        | "Magma6"        | "Magma7"        | "Magma8"        | "Magma9"        | "Magma10"        | "Magma11"        | "Magma256"
export type Plasma       = "Plasma3"       | "Plasma4"       | "Plasma5"       | "Plasma6"       | "Plasma7"       | "Plasma8"       | "Plasma9"       | "Plasma10"       | "Plasma11"       | "Plasma256"
export type Viridis      = "Viridis3"      | "Viridis4"      | "Viridis5"      | "Viridis6"      | "Viridis7"      | "Viridis8"      | "Viridis9"      | "Viridis10"      | "Viridis11"      | "Viridis256"
export type Cividis      = "Cividis3"      | "Cividis4"      | "Cividis5"      | "Cividis6"      | "Cividis7"      | "Cividis8"      | "Cividis9"      | "Cividis10"      | "Cividis11"      | "Cividis256"
export type Category10   = "Category10_3"  | "Category10_4"  | "Category10_5"  | "Category10_6"  | "Category10_7"  | "Category10_8"  | "Category10_9"  | "Category10_10"
export type Category20   = "Category20_3"  | "Category20_4"  | "Category20_5"  | "Category20_6"  | "Category20_7"  | "Category20_8"  | "Category20_9"  | "Category20_10"  | "Category20_11" | "Category20_12"  | "Category20_13"  | "Category20_14"  | "Category20_15"  | "Category20_16"  | "Category20_17"  | "Category20_18"  | "Category20_19"  | "Category20_20"
export type Category20b  = "Category20b_3" | "Category20b_4" | "Category20b_5" | "Category20b_6" | "Category20b_7" | "Category20b_8" | "Category20b_9" | "Category20b_10" | "Category20b_11"| "Category20b_12" | "Category20b_13" | "Category20b_14" | "Category20b_15" | "Category20b_16" | "Category20b_17" | "Category20b_18" | "Category20b_19" | "Category20b_20"
export type Category20c  = "Category20c_3" | "Category20c_4" | "Category20c_5" | "Category20c_6" | "Category20c_7" | "Category20c_8" | "Category20c_9" | "Category20c_10" | "Category20c_11"| "Category20c_12" | "Category20c_13" | "Category20c_14" | "Category20c_15" | "Category20c_16" | "Category20c_17" | "Category20c_18" | "Category20c_19" | "Category20c_20"
export type Colorblind   = "Colorblind3"   | "Colorblind4"   | "Colorblind5"   | "Colorblind6"   | "Colorblind7"   | "Colorblind8"
export type Bright       = "Bright3"       | "Bright4"       | "Bright5"       | "Bright6"       | "Bright7"
export type HighContrast = "HighContrast3"
export type Vibrant      = "Vibrant3"      | "Vibrant4"      | "Vibrant5"      | "Vibrant6"      | "Vibrant7"
export type Muted        = "Muted3"        | "Muted4"        | "Muted5"        | "Muted6"        | "Muted7"        | "Muted8"
export type MediumContrast = "MediumContrast3" | "MediumContrast4" | "MediumContrast5" | "MediumContrast6"
export type Light        = "Light3"        | "Light4"        | "Light5"        | "Light6"        | "Light7"        | "Light8"        | "Light9"
export type Sunset       = "Sunset3"       | "Sunset4"       | "Sunset5"       | "Sunset6"       | "Sunset7"       | "Sunset8"       | "Sunset9"       | "Sunset10"        | "Sunset11"
export type BuRd         = "BuRd3"         | "BuRd4"         | "BuRd5"         | "BuRd6"         | "BuRd7"         | "BuRd8"         | "BuRd9"
export type TolPRGn      = "TolPRGn3"      | "TolPRGn4"      | "TolPRGn5"      | "TolPRGn6"      | "TolPRGn7"      | "TolPRGn8"      | "TolPRGn9"
export type TolYlOrBr    = "TolYlOrBr3"    | "TolYlOrBr4"    | "TolYlOrBr5"    | "TolYlOrBr6"    | "TolYlOrBr7"    | "TolYlOrBr8"    | "TolYlOrBr9"
export type Iridescent   =
  "Iridescent3"   | "Iridescent4"   | "Iridescent5"   | "Iridescent6"   | "Iridescent7"   | "Iridescent8"   | "Iridescent9"   | "Iridescent10" |
  "Iridescent11"  | "Iridescent12"  | "Iridescent13"  | "Iridescent14"  | "Iridescent15"  | "Iridescent16" |  "Iridescent17"  | "Iridescent18" |
  "Iridescent19"  | "Iridescent20"  | "Iridescent21"  | "Iridescent22"  | "Iridescent23"
export type TolRainbow =
  "TolRainbow3"  | "TolRainbow4"  | "TolRainbow5"  | "TolRainbow6"  | "TolRainbow7"  | "TolRainbow8"  | "TolRainbow9"  | "TolRainbow10" |
  "TolRainbow11" | "TolRainbow12" | "TolRainbow13" | "TolRainbow14" | "TolRainbow15" | "TolRainbow16" | "TolRainbow17" | "TolRainbow18" |
  "TolRainbow19" | "TolRainbow20" | "TolRainbow21" | "TolRainbow22" | "TolRainbow23"

export type Palette =
  YlGn | YlGnBu | GnBu | BuGn | PuBuGn | PuBu | BuPu | RdPu | PuRd | OrRd | YlOrRd | YlOrBr | Purples | Blues | Greens | Oranges | Reds |
  Greys | PuOr | BrBG | PRGn | PiYG | RdBu | RdGy | RdYlBu | Spectral | RdYlGn | Accent | Dark2 | Paired | Pastel1 | Pastel2 | Set1 |
  Set2 | Set3 | Bokeh | Inferno | Magma | Plasma | Viridis | Cividis | Category10 | Category20 | Category20b | Category20c | Colorblind |
  Bright | HighContrast | Vibrant | Muted | MediumContrast | Light | Sunset | BuRd | TolPRGn | TolYlOrBr | Iridescent | TolRainbow

export const YlGn           = {YlGn3, YlGn4, YlGn5, YlGn6, YlGn7, YlGn8, YlGn9}
export const YlGnBu         = {YlGnBu3, YlGnBu4, YlGnBu5, YlGnBu6, YlGnBu7, YlGnBu8, YlGnBu9}
export const GnBu           = {GnBu3, GnBu4, GnBu5, GnBu6, GnBu7, GnBu8, GnBu9}
export const BuGn           = {BuGn3, BuGn4, BuGn5, BuGn6, BuGn7, BuGn8, BuGn9}
export const PuBuGn         = {PuBuGn3, PuBuGn4, PuBuGn5, PuBuGn6, PuBuGn7, PuBuGn8, PuBuGn9}
export const PuBu           = {PuBu3, PuBu4, PuBu5, PuBu6, PuBu7, PuBu8, PuBu9}
export const BuPu           = {BuPu3, BuPu4, BuPu5, BuPu6, BuPu7, BuPu8, BuPu9}
export const RdPu           = {RdPu3, RdPu4, RdPu5, RdPu6, RdPu7, RdPu8, RdPu9}
export const PuRd           = {PuRd3, PuRd4, PuRd5, PuRd6, PuRd7, PuRd8, PuRd9}
export const OrRd           = {OrRd3, OrRd4, OrRd5, OrRd6, OrRd7, OrRd8, OrRd9}
export const YlOrRd         = {YlOrRd3, YlOrRd4, YlOrRd5, YlOrRd6, YlOrRd7, YlOrRd8, YlOrRd9}
export const YlOrBr         = {YlOrBr3, YlOrBr4, YlOrBr5, YlOrBr6, YlOrBr7, YlOrBr8, YlOrBr9}
export const Purples        = {Purples3, Purples4, Purples5, Purples6, Purples7, Purples8, Purples9}
export const Blues          = {Blues3, Blues4, Blues5, Blues6, Blues7, Blues8, Blues9}
export const Greens         = {Greens3, Greens4, Greens5, Greens6, Greens7, Greens8, Greens9}
export const Oranges        = {Oranges3, Oranges4, Oranges5, Oranges6, Oranges7, Oranges8, Oranges9}
export const Reds           = {Reds3, Reds4, Reds5, Reds6, Reds7, Reds8, Reds9}
export const Greys          = {Greys3, Greys4, Greys5, Greys6, Greys7, Greys8, Greys9, Greys10, Greys11, Greys256}
export const PuOr           = {PuOr3, PuOr4, PuOr5, PuOr6, PuOr7, PuOr8, PuOr9, PuOr10, PuOr11}
export const BrBG           = {BrBG3, BrBG4, BrBG5, BrBG6, BrBG7, BrBG8, BrBG9, BrBG10, BrBG11}
export const PRGn           = {PRGn3, PRGn4, PRGn5, PRGn6, PRGn7, PRGn8, PRGn9, PRGn10, PRGn11}
export const PiYG           = {PiYG3, PiYG4, PiYG5, PiYG6, PiYG7, PiYG8, PiYG9, PiYG10, PiYG11}
export const RdBu           = {RdBu3, RdBu4, RdBu5, RdBu6, RdBu7, RdBu8, RdBu9, RdBu10, RdBu11}
export const RdGy           = {RdGy3, RdGy4, RdGy5, RdGy6, RdGy7, RdGy8, RdGy9, RdGy10, RdGy11}
export const RdYlBu         = {RdYlBu3, RdYlBu4, RdYlBu5, RdYlBu6, RdYlBu7, RdYlBu8, RdYlBu9, RdYlBu10, RdYlBu11}
export const Spectral       = {Spectral3, Spectral4, Spectral5, Spectral6, Spectral7, Spectral8, Spectral9, Spectral10, Spectral11}
export const RdYlGn         = {RdYlGn3, RdYlGn4, RdYlGn5, RdYlGn6, RdYlGn7, RdYlGn8, RdYlGn9, RdYlGn10, RdYlGn11}
export const Bokeh          = {Bokeh3, Bokeh4, Bokeh5, Bokeh6, Bokeh7, Bokeh8}
export const Inferno        = {Inferno3, Inferno4, Inferno5, Inferno6, Inferno7, Inferno8, Inferno9, Inferno10, Inferno11, Inferno256}
export const Magma          = {Magma3, Magma4, Magma5, Magma6, Magma7, Magma8, Magma9, Magma10, Magma11, Magma256}
export const Plasma         = {Plasma3, Plasma4, Plasma5, Plasma6, Plasma7, Plasma8, Plasma9, Plasma10, Plasma11, Plasma256}
export const Viridis        = {Viridis3, Viridis4, Viridis5, Viridis6, Viridis7, Viridis8, Viridis9, Viridis10, Viridis11, Viridis256}
export const Cividis        = {Cividis3, Cividis4, Cividis5, Cividis6, Cividis7, Cividis8, Cividis9, Cividis10, Cividis11, Cividis256}
export const Turbo          = {Turbo3, Turbo4, Turbo5, Turbo6, Turbo7, Turbo8, Turbo9, Turbo10, Turbo11, Turbo256}
export const Accent         = {Accent3, Accent4, Accent5, Accent6, Accent7, Accent8}
export const Dark2          = {Dark2_3, Dark2_4, Dark2_5, Dark2_6, Dark2_7, Dark2_8}
export const Paired         = {Paired3, Paired4, Paired5, Paired6, Paired7, Paired8, Paired9, Paired10, Paired11, Paired12}
export const Pastel1        = {Pastel1_3, Pastel1_4, Pastel1_5, Pastel1_6, Pastel1_7, Pastel1_8, Pastel1_9}
export const Pastel2        = {Pastel2_3, Pastel2_4, Pastel2_5, Pastel2_6, Pastel2_7, Pastel2_8}
export const Set1           = {Set1_3, Set1_4, Set1_5, Set1_6, Set1_7, Set1_8, Set1_9}
export const Set2           = {Set2_3, Set2_4, Set2_5, Set2_6, Set2_7, Set2_8}
export const Set3           = {Set3_3, Set3_4, Set3_5, Set3_6, Set3_7, Set3_8, Set3_9, Set3_10, Set3_11, Set3_12}
export const Category10     = {Category10_3, Category10_4, Category10_5, Category10_6, Category10_7, Category10_8, Category10_9, Category10_10}
export const Category20     = {Category20_3, Category20_4, Category20_5, Category20_6, Category20_7, Category20_8, Category20_9, Category20_10, Category20_11, Category20_12, Category20_13, Category20_14, Category20_15, Category20_16, Category20_17, Category20_18, Category20_19, Category20_20}
export const Category20b    = {Category20b_3, Category20b_4, Category20b_5, Category20b_6, Category20b_7, Category20b_8, Category20b_9, Category20b_10, Category20b_11, Category20b_12, Category20b_13, Category20b_14, Category20b_15, Category20b_16, Category20b_17, Category20b_18, Category20b_19, Category20b_20}
export const Category20c    = {Category20c_3, Category20c_4, Category20c_5, Category20c_6, Category20c_7, Category20c_8, Category20c_9, Category20c_10, Category20c_11, Category20c_12, Category20c_13, Category20c_14, Category20c_15, Category20c_16, Category20c_17, Category20c_18, Category20c_19, Category20c_20}
export const Colorblind     = {Colorblind3, Colorblind4, Colorblind5, Colorblind6, Colorblind7, Colorblind8}
export const Bright         = {Bright3, Bright4, Bright5, Bright6, Bright7}
export const HighContrast   = {HighContrast3}
export const Vibrant        = {Vibrant3, Vibrant4, Vibrant5, Vibrant6, Vibrant7}
export const Muted          = {Muted3, Muted4, Muted5, Muted6, Muted7, Muted8}
export const MediumContrast = {MediumContrast3, MediumContrast4, MediumContrast5, MediumContrast6}
export const Light          = {Light3, Light4, Light5, Light6, Light7, Light8, Light9}
export const Sunset         = {Sunset3, Sunset4, Sunset5, Sunset6, Sunset7, Sunset8, Sunset9, Sunset10, Sunset11}
export const BuRd           = {BuRd3, BuRd4, BuRd5, BuRd6, BuRd7, BuRd8, BuRd9}
export const TolPRGn        = {TolPRGn3, TolPRGn4, TolPRGn5, TolPRGn6, TolPRGn7, TolPRGn8, TolPRGn9}
export const TolYlOrBr      = {TolYlOrBr3, TolYlOrBr4, TolYlOrBr5, TolYlOrBr6, TolYlOrBr7, TolYlOrBr8, TolYlOrBr9}
export const Iridescent     = {Iridescent3, Iridescent4, Iridescent5, Iridescent6, Iridescent7, Iridescent8, Iridescent9, Iridescent10,
                               Iridescent11, Iridescent12, Iridescent13, Iridescent14, Iridescent15, Iridescent16, Iridescent17, Iridescent18,
                               Iridescent19, Iridescent20, Iridescent21, Iridescent22, Iridescent23}
export const TolRainbow     = {TolRainbow3, TolRainbow4, TolRainbow5, TolRainbow6, TolRainbow7, TolRainbow8, TolRainbow9, TolRainbow10,
                               TolRainbow11, TolRainbow12, TolRainbow13, TolRainbow14, TolRainbow15, TolRainbow16, TolRainbow17, TolRainbow18,
                               TolRainbow19, TolRainbow20, TolRainbow21, TolRainbow22, TolRainbow23}

export const brewer = {
  YlGn,
  YlGnBu,
  GnBu,
  BuGn,
  PuBuGn,
  PuBu,
  BuPu,
  RdPu,
  PuRd,
  OrRd,
  YlOrRd,
  YlOrBr,
  Purples,
  Blues,
  Greens,
  Oranges,
  Reds,
  Greys,
  PuOr,
  BrBG,
  PRGn,
  PiYG,
  RdBu,
  RdGy,
  RdYlBu,
  Spectral,
  RdYlGn,
  Accent,
  Dark2,
  Paired,
  Pastel1,
  Pastel2,
  Set1,
  Set2,
  Set3,
}

export const d3 = {
  Category10,
  Category20,
  Category20b,
  Category20c,
}

export const bokeh = {
  Bokeh,
}

export const mpl = {
  Magma,
  Inferno,
  Plasma,
  Viridis,
  Cividis,
  Turbo,
}

export const tol = {
  Bright,
  HighContrast,
  Vibrant,
  Muted,
  MediumContrast,
  Light,
  Sunset,
  BuRd,
  TolPRGn,
  TolYlOrBr,
  Iridescent,
  TolRainbow,
}

export const colorblind = {
  Colorblind,
}

export function linear_palette<T>(palette: T[], n: number): T[] {
  if (n <= palette.length)
    return linspace(0, palette.length - 1, n).map((i) => palette[i|0])
  else
    throw new Error("too many color entries requested")
}

export function varying_alpha_palette(color: Color, n: number | null = null, start_alpha: number = 0, end_alpha: number = 255): string[] {
  if (start_alpha < 0 || start_alpha > 255)
    throw new Error("start_alpha must be in the range 0 to 255")

  if (end_alpha < 0 || end_alpha > 255)
    throw new Error("end_alpha must be in the range 0 to 255")

  const rgba = color2rgba(color)

  if (rgba[3] < 255) {
    const factor = rgba[3] / 255
    start_alpha *= factor
    end_alpha *= factor
  }

  // Length of returned palette
  const npalette = (n != null && n > 0) ? n : Math.round(Math.abs(end_alpha - start_alpha)) + 1

  // Convert alpha to range 0 to 1
  const diff_alpha = (end_alpha - start_alpha) / 255
  start_alpha /= 255

  const palette = new Array<string>(npalette)
  for (let i = 0; i < npalette; i++)
    palette[i] = color2hex(rgba, start_alpha + diff_alpha*i / (npalette-1))

  return palette
}

export function magma(n: number) {
  return linear_palette(Magma256, n)
}
export function inferno(n: number) {
  return linear_palette(Inferno256, n)
}
export function plasma(n: number) {
  return linear_palette(Plasma256, n)
}
export function viridis(n: number) {
  return linear_palette(Viridis256, n)
}
export function cividis(n: number) {
  return linear_palette(Cividis256, n)
}
export function turbo(n: number) {
  return linear_palette(Turbo256, n)
}
export function grey(n: number) {
  return linear_palette(Greys256, n)
}

/****************************************************************************
 * License regarding the Viridis, Magma, Plasma and Inferno colormaps
 * New matplotlib colormaps by Nathaniel J. Smith, Stefan van der Walt,
 * and (in the case of viridis) Eric Firing.
 *
 * The Viridis, Magma, Plasma, and Inferno color maps are released under the
 * CC0 license / public domain dedication. We would appreciate credit if you
 * use or redistribute these colormaps, but do not impose any legal
 * restrictions.
 *
 * To the extent possible under law, the persons who associated CC0 with
 * mpl-colormaps have waived all copyright and related or neighboring rights
 * to mpl-colormaps.
 *
 * You should have received a copy of the CC0 legalcode along with this
 * work.  If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.
 ****************************************************************************
 * This product includes color specifications and designs developed by
 * Cynthia Brewer (http://colorbrewer2.org/).  The Brewer colormaps are
 * licensed under the Apache v2 license. You may obtain a copy of the
 * License at http://www.apache.org/licenses/LICENSE-2.0
 ****************************************************************************
 * License regarding the D3 color palettes (Category10, Category20,
 * Category20b, and Category 20c):
 *
 * Copyright 2010-2015 Mike Bostock
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 * * Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * * Neither the name of the author nor the names of contributors may be used to
 *   endorse or promote products derived from this software without specific
 *   prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 ****************************************************************************
 * License regarding Paul Tol's color schemes (Bright, HighContrast, Vibrant,
 * Muted, MediumContrast, PaleTextBackground, DarkText, Light, Sunset, BuRd,
 * TolPRGn, TolYlOrBr, Iridescent, TolRainbow)
 *
 * Copyright (c) 2021, Paul Tol
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 * * Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * * Neither the name of the copyright holder nor the names of contributors may
 *   be used to endorse or promote products derived from this software without
 *   specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 ****************************************************************************
 */
