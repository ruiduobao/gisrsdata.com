---
title: "MERIT Hydro: Global Hydrography Datasets"
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

# MERIT Hydro: Global Hydrography Datasets

## 数据集简介

MERIT Hydro is a new global flow direction map at 3 arc-second resolution (~90
m at the equator) derived from the version 1.0.3 of the MERIT DEM elevation data
and water body datasets (G1WBM, GSWO and OpenStreetMap).

MERIT Hydro contains the output of a new algorithm that
extracts river networks near-automatically by separating actual inland basins from
noise caused by the errors in input elevation data. After a minimum
amount of hand-editing, the constructed hydrography map shows good agreement with
existing quality-controlled river network datasets in terms of flow accumulation
area and river basin shape (see Figure 9a in the paper). The location of river
streamlines was realistically aligned with existing satellite-based global
river channel data (see Figure 10a in the paper). Relative error
in the drainage area was smaller than 0.05 for 90% of GRDC gauges, confirming
the accuracy of the delineated global river networks. Discrepancies in flow accumulation
area were found mostly in arid river basins containing depressions that are occasionally
connected at high water levels and thus resulting in uncertain watershed boundaries.

MERIT Hydro improves on existing global hydrography datasets in terms of spatial
coverage (between 90N and 60S) and representation of small streams, mainly due
to increased availability of high-quality baseline geospatial datasets.

[You can use this web app to visualize MERIT Hydro data.](https://meritdataset.users.earthengine.app/view/merit-hydro-visualization-and-interactive-map)
[The app's source code is available.](https://github.com/google/earthengine-community/blob/master/datasets/scripts/Hydro_Visualization.js)

Known Problems:

* River width (Update from GWD-LR v1): Width algorithm was updated to consider
  sub-pixel water fraction. Now, 30 m water map is used for width calculation at
  90 m resolution. Currently river width is calculated for each channel separately
  in braided/anabranching sections. Merged river width should be calculated.
* Water body map: There are some inconsistencies between the DEM land sea mask and
  wate body data (such as new islands along the coast). The quality of OpenStreeetMap
  water body layer is not uniform in all areas.
* Channel bifurcations: Channel bifurcation is not well represented in the current
  version. Each pixel is assumed to have only one downstream direction. Secondary
  (or multiple) downstream direction should be considered, to represent complex
  river networks in the delta regions, floodplains, and braided rivers.
* Underground rivers/tunnels: Major underground rivers/tunnels should be implemented
  to improve large-scale water balance.
* River/lake separation: Rivers and lakes need to be separated better for some applications.
* Below-sea-level areas: The areas below sea level in coastal regions are not well
  represented in adjusted elevation data.
* Flow direction over glaciers: Flow direction over glaciers is not well represented,
  because the elevation of glacier centerline is higher than glacier edge.
* Supplementary data: It would be better to add location of GRDC gauging stations, water
  falls, reservoirs, etc.

Data Sources:

* [U-Tokyo MERIT DEM](http://hydro.iis.u-tokyo.ac.jp/~yamadai/MERIT_DEM/index.html)
* [U-Tokyo G1WBM water body data](http://hydro.iis.u-tokyo.ac.jp/~yamadai/G3WBM/index.html)
* [OpenStreetMap water body layer](http://hydro.iis.u-tokyo.ac.jp/~yamadai/OSM_water/index.html)
* [EC-JRC Global Surface Water Occurrence](http://hydro.iis.u-tokyo.ac.jp/~yamadai/G3WBM/index.html)
* [U-Maryland Landsat forest cover data](https://glad.earthengine.app/view/global-forest-change)

## 基本信息

- 数据集编号（Earth Engine ID）：`MERIT/Hydro/v1_0_1`
- 数据类型：影像（Image）
- 提供方：Dai Yamazaki (University of Tokyo)、Google Earth Engine
- 时间范围：1987-01-01 至 2017-01-01
- 空间分辨率：92.77 米
- 许可：ODbL-1.0
- 关键词：dem, elevation, flow-direction, hand, hydrography, hydrosheds, merit, river-width, surface-ground-water, upstream-drainage-area

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| elv | Elevation | 92.77 |  |
| dir | Flow Direction (Local Drainage Direction)  * 1: east * 2: southeast * 4: south * 8: southwest * 16: west * 32: northwest * 64: north * 128: northeast * 0: river mouth * -1: inland depression  | 92.77 |  |
| wth | River channel width at the channel centerlines. River channel width is calculated by the method described in [Yamazaki et al. 2012, WRR], with some improvements/changes on the algorithm.  | 92.77 |  |
| wat | Land and permanent water  * 0: Land * 1: permanent water | 92.77 |  |
| upa | Upstream drainage area (flow accumulation area) | 92.77 |  |
| upg | Upstream drainage pixel (flow accumulation grid). | 92.77 |  |
| hnd | Hydrologically adjusted elevations, also know as "hand" (height above the nearest drainage). The elevations are adjusted to satisfy the condition "downstream is not higher than its upstream" while minimizing the required modifications from the original DEM.  The elevation above EGM96 geoid is represented in meters, and the vertical increment is set to 10cm. For detailed method, see [Yamazaki et al., 2012, WRR].  | 92.77 |  |
| viswth | Visualization of the river channel width. | 92.77 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('MERIT/Hydro/v1_0_1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MERIT_Hydro_v1_0_1
- 数据引用：Yamazaki D., D. Ikeshima, J. Sosa, P.D. Bates, G.H. Allen, T.M. Pavelsky.
MERIT Hydro: A high-resolution global hydrography map based on latest
topography datasets
Water Resources Research, vol.55, pp.5053-5073, 2019,
[doi:10.1029/2019WR024873](https://doi.org/10.1029/2019WR024873)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
