---
title: "MERIT DEM：多误差去除改进地形 DEM"
date: 2026-11-03 12:00:00
permalink: /pages/7e86fdfa/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "dem"
  - "elevation"
  - "elevation-topography"
  - "merit"
  - "topography"
---

# MERIT DEM：多误差去除改进地形 DEM

英文原名：MERIT DEM: Multi-Error-Removed Improved-Terrain DEM

## 这是什么数据

MERIT DEM 是一个 3 弧秒分辨率（赤道约 90 米）的高精度全球 DEM，通过从现有 DEM（NASA SRTM3 DEM、JAXA AW3D DEM、Viewfinder Panoramas DEM）中消除主要误差分量而制成。

MERIT DEM 使用多个卫星数据集与滤波技术分离绝对偏差、条带噪声、斑点噪声与树高偏差。误差去除后，垂直精度达 2 米或更好的陆地区域从 39% 增加到 58%。在平坦地区发现显著改善——那里的高度误差大于地形变异，河流网络与丘陵-谷地结构等地貌得到清晰表征。

MERIT DEM 通过处理以下产品作为基准数据开发：

除上述基准 DEM 外，以下产品被用作补充数据：

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球陆地；分辨率：3 弧秒（约 90 米）。
- 时间范围：1987-01-01 至 2017-01-01

## 分辨率与规格

- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| dem | 以米为单位的高程，参考 EGM96 大地水准面模型。 | 92.77 |  |

## 能拿来做什么

- 地形分析与地貌研究
- 水文建模与洪水模拟
- 全球高程基准数据

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('MERIT/DEM/v1_0_3');
```

- 数据集编号（Earth Engine ID）：`MERIT/DEM/v1_0_3`
- 提供方：Dai Yamazaki (University of Tokyo)、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MERIT_DEM_v1_0_3
* [NASA SRTM3 DEM v2.1](https://dds.cr.usgs.gov/srtm/version2_1/SRTM3)
* [JAXA AW3D - 30 m DEM v1](https://www.eorc.jaxa.jp/ALOS/en/aw3d30/index.htm)
* [Viewfinder Panoramas DEM](https://www.viewfinderpanoramas.org/dem3.html)
* [NASA-NSIDC ICESat/GLAS GLA14 data](https://nsidc.org/data/gla14)
* [U-Maryland Landsat forest cover data](https://glad.earthengine.app/view/global-forest-change)
* [NASA Global Forest height data](https://www.nasa.gov/topics/earth/features/forest-height-map.html)
* [JAMSTEC/U-Tokyo G3WBM water body data](https://hydro.iis.u-tokyo.ac.jp/~yamadai/G3WBM/index.html)

## 许可与引用

- 许可：ODbL-1.0
- 关键词：dem, elevation, elevation-topography, merit, topography
- 数据引用：Yamazaki D., D. Ikeshima, R. Tawatari, T. Yamaguchi, F. O'Loughlin, J.C. Neal,
C.C. Sampson, S. Kanae & P.D. Bates. A high accuracy map of global
terrain elevations.  Geophysical Research Letters, vol.44, pp.5844-5853, 2017.

[doi:10.1002/2017GL072874](https://doi.org/10.1002/2017GL072874)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ALOS 全球 30 米 DSM v4.1](/pages/774620fb/)
- [ASTER传感器(TERRA)](/pages/da7fa1/)
- [CryoSat-2 南极 1 公里高程模型](/pages/a0390601/)
- [GHSL：全球建筑体积 1975–2030（P2023A）](/pages/a37f30e2/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
