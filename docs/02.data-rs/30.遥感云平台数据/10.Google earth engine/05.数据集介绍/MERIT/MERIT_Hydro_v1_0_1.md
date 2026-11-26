---
title: "MERIT Hydro：全球水文数据集"
date: 2026-11-03 12:00:00
permalink: /pages/bfe11eff/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "dem"
  - "elevation"
  - "flow-direction"
  - "hand"
  - "hydrography"
  - "hydrosheds"
  - "merit"
  - "river-width"
  - "surface-ground-water"
  - "upstream-drainage-area"
---

# MERIT Hydro：全球水文数据集

英文原名：MERIT Hydro: Global Hydrography Datasets

## 这是什么数据

MERIT Hydro 是一个新的 3 弧秒分辨率（赤道约 90 米）全球流向图，源自 MERIT DEM 高程数据版本 1.0.3 与水体数据集（G1WBM、GSWO 与 OpenStreetMap）。

MERIT Hydro 包含一个新算法的输出，该算法通过将真实内陆流域与输入高程数据误差引起的噪声分离，近乎自动地提取河流网络。经少量手工编辑后，所构建的水文图在汇流面积与流域形状方面与现有质量受控的河流网络数据集吻合良好（见论文图 9a）。河流中心线的位置与现有基于卫星的全球河道数据真实对齐（见论文图 10a）。90% 的 GRDC 测站的流域面积相对误差小于 0.05，证实了所勾画全球河流网络的精度。汇流面积的差异主要出现在干旱流域——其中包含偶尔在高水位时连通的洼地，从而导致流域边界不确定。

MERIT Hydro 在空间覆盖（北纬 90° 至南纬 60° 之间）与小河流表征方面改进了现有全球水文数据集，主要得益于高质量基准地理空间数据集可用性的提高。

[可使用此 Web 应用可视化 MERIT Hydro 数据。](https://meritdataset.users.earthengine.app/view/merit-hydro-visualization-and-interactive-map)
[该应用的源代码在此提供。](https://github.com/google/earthengine-community/blob/master/datasets/scripts/Hydro_Visualization.js)

已知问题：

* 河流宽度（GWD-LR v1 更新）：宽度算法已更新以考虑亚像元水体比例。现在，30 米水体图用于 90 米分辨率的宽度计算。目前河流宽度在辫状/网状河段对每条河道分别计算。应计算合并的河流宽度。
* 水体图：DEM 陆海掩膜与水体数据之间存在一些不一致（如海岸沿线的新岛屿）。OpenStreetMap 水体层在所有区域的质量并不均匀。
* 河道分汊：当前版本对河道分汊的表征不好。假设每个像元只有一个下游方向。应考虑次级（或多个）下游方向，以表征三角洲地区、洪泛区与辫状河的复杂河流网络。
* 地下河/隧道：应实现主要地下河/隧道以改善大尺度水量平衡。
* 河湖分离：某些应用需要更好地分离河流与湖泊。
* 低于海平面的区域：沿海地区低于海平面的区域在调整后的高程数据中表征不好。
* 冰川上的流向：冰川上的流向表征不好，因为冰川中心线的高程高于冰川边缘。
* 补充数据：最好添加 GRDC 测站位置、瀑布、水库等。

数据来源：

## 覆盖范围与时间

- 覆盖范围：覆盖范围：北纬 90° 至南纬 60°；分辨率：3 弧秒（约 92.77 米）。
- 时间范围：1987-01-01 至 2017-01-01

## 分辨率与规格

- 空间分辨率：约 92.77 米
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| elv | 高程。 | 92.77 |  |
| dir | 流向（局部排水方向）。* 1：东 * 2：东南 * 4：南 * 8：西南 * 16：西 * 32：西北 * 64：北 * 128：东北 * 0：河口 * -1：内陆洼地。 | 92.77 |  |
| wth | 河道中心线处的河流河道宽度。河流河道宽度按 [Yamazaki et al. 2012, WRR] 所述方法计算，算法有若干改进/变更。 | 92.77 |  |
| wat | 陆地与永久水体。* 0：陆地 * 1：永久水体。 | 92.77 |  |
| upa | 上游集水面积（汇流面积）。 | 92.77 |  |
| upg | 上游集水像元（汇流网格）。 | 92.77 |  |
| hnd | 水文调整高程，也称「hand」（高于最近排水的高度）。高程被调整以满足「下游不高于其上游」的条件，同时最小化对原始 DEM 的修改。EGM96 大地水准面以上的高程以米表示，垂直增量设为 10 厘米。详细方法见 [Yamazaki et al., 2012, WRR]。 | 92.77 |  |
| viswth | 河流河道宽度的可视化。 | 92.77 |  |

## 能拿来做什么

- 河流网络与流域分析
- 洪水风险与水资源评估
- 水文地形处理

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('MERIT/Hydro/v1_0_1');
```

- 数据集编号（Earth Engine ID）：`MERIT/Hydro/v1_0_1`
- 提供方：Dai Yamazaki (University of Tokyo)、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MERIT_Hydro_v1_0_1
* [U-Tokyo MERIT DEM](http://hydro.iis.u-tokyo.ac.jp/~yamadai/MERIT_DEM/index.html)
* [U-Tokyo G1WBM water body data](http://hydro.iis.u-tokyo.ac.jp/~yamadai/G3WBM/index.html)
* [OpenStreetMap water body layer](http://hydro.iis.u-tokyo.ac.jp/~yamadai/OSM_water/index.html)
* [EC-JRC Global Surface Water Occurrence](http://hydro.iis.u-tokyo.ac.jp/~yamadai/G3WBM/index.html)
* [U-Maryland Landsat forest cover data](https://glad.earthengine.app/view/global-forest-change)

## 许可与引用

- 许可：ODbL-1.0
- 关键词：dem, elevation, flow-direction, hand, hydrography, hydrosheds, merit, river-width, surface-ground-water, upstream-drainage-area
- 数据引用：Yamazaki D., D. Ikeshima, J. Sosa, P.D. Bates, G.H. Allen, T.M. Pavelsky.
MERIT Hydro: A high-resolution global hydrography map based on latest
topography datasets
Water Resources Research, vol.55, pp.5053-5073, 2019,
[doi:10.1029/2019WR024873](https://doi.org/10.1029/2019WR024873)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ALOS 全球 30 米 DSM v4.1](/pages/774620fb/)
- [ASTER传感器(TERRA)](/pages/da7fa1/)
- [CryoSat-2 南极 1 公里高程模型](/pages/a0390601/)
- [GHSL：全球建筑体积 1975–2030（P2023A）](/pages/a37f30e2/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
