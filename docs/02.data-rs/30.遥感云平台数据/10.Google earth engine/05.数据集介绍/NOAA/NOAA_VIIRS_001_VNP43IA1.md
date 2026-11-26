---
title: "VNP43IA1：BRDF/反照率模型参数逐日 L3 全球 500 米 SIN 网格"
date: 2026-11-03 12:00:00
permalink: /pages/3e009701/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "land"
  - "nasa"
  - "noaa"
  - "satellite-imagery"
  - "surface"
  - "viirs"
---

# VNP43IA1：BRDF/反照率模型参数逐日 L3 全球 500 米 SIN 网格

英文原名：VNP43IA1: BRDF/Albedo Model Parameters Daily L3 Global 500m SIN Grid

## 这是什么数据

Suomi 国家极轨伙伴（Suomi NPP）NASA 可见红外成像辐射计套件（VIIRS）双向反射分布函数（BRDF）与反照率模型参数（VNP43IA1）第 1 版产品，提供 500 分辨率的核权重（参数）。VNP43IA1 产品逐日生产，使用 16 天 VIIRS 数据，时间加权到第九天，这一点反映在文件名中。VNP43IA1 产品提供三个随光谱变化的核权重，也称模型参数：各向同性（fiso）、体积散射（fvol）与几何光学（fgeo），可用于模拟地球表面的各向异性效应。所有 VNP43 数据产品的设计都旨在促进 NASA 中分辨率成像光谱仪（MODIS）BRDF/反照率数据产品套件的连续性。

## 覆盖范围与时间

- 覆盖范围：空间：全球陆地；时间：2012 年至 2024 年（逐日）；分辨率：500 米。
- 时间范围：2012-01-17 至 2024-06-09

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| BRDF_Albedo_Band_Mandatory_Quality_I1 | 波段 I1 的 BRDF/反照率强制质量 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_I2 | 波段 I2 的 BRDF/反照率强制质量 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_I3 | 波段 I3 的 BRDF/反照率强制质量 | 500 |  |
| BRDF_Albedo_Parameters_fiso_I1 | 波段 I1 的各向同性参数 | 500 |  |
| BRDF_Albedo_Parameters_fvol_I1 | 波段 I1 的体积散射参数 | 500 |  |
| BRDF_Albedo_Parameters_fgeo_I1 | 波段 I1 的几何光学参数 | 500 |  |
| BRDF_Albedo_Parameters_fiso_I2 | 波段 I2 的各向同性参数 | 500 |  |
| BRDF_Albedo_Parameters_fvol_I2 | 波段 I2 的体积散射参数 | 500 |  |
| BRDF_Albedo_Parameters_fgeo_I2 | 波段 I2 的几何光学参数 | 500 |  |
| BRDF_Albedo_Parameters_fiso_I3 | 波段 I3 的各向同性参数 | 500 |  |
| BRDF_Albedo_Parameters_fvol_I3 | 波段 I3 的体积散射参数 | 500 |  |
| BRDF_Albedo_Parameters_fgeo_I3 | 波段 I3 的几何光学参数 | 500 |  |

## 能拿来做什么

- 在 Google Earth Engine 中调用该数据集，叠加行政区划、土地覆盖等图层做空间分析。
- 做长时间序列分析，提取区域统计值并导出图表与 GeoTIFF。
- 作为教学与科研示例数据，演示 Earth Engine 影像集合的筛选、合成与可视化流程。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NOAA/VIIRS/001/VNP43IA1');
```

- 数据集编号（Earth Engine ID）：`NOAA/VIIRS/001/VNP43IA1`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_VIIRS_001_VNP43IA1
* [User's Guide](https://www.umb.edu/spectralmass/viirs-user-guide/vnp43ia1-and-vnp43ma1-brdf-albedo-model-parameters)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/194/VNP43_ATBD_V1.pdf)
* [General Documentation](https://lpdaac.usgs.gov/products/vnp43ia1v001/)
* [Land Product Quality Assessment website](https://landweb.modaps.eosdis.nasa.gov/browse?sensor=VIIRS&sat=SNPP)

## 许可与引用

- 许可：proprietary
- 关键词：land, nasa, noaa, satellite-imagery, surface, viirs
- 数据引用：Please visit
[LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/VIIRS/VNP43IA1.001

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [VNP43IA2：BRDF/反照率质量逐日 L3 全球 500 米 SIN 网格](/pages/81521072/)
- [VNP09GA：VIIRS 地表反射率逐日 500 米与 1 公里 [已弃用]](/pages/940b557d/)
- [VNP09H1：VIIRS 地表反射率 8 天 L3 全球 500 米 [已弃用]](/pages/59f40ab0/)
- [ALOS AVNIR-2 正射影像（ORI）](/pages/d4abf354/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
