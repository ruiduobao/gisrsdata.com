---
title: "VNP15A2H：叶面积指数/光合有效辐射分量 8 天 L4 全球 500 米 SIN 网格 [已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/abb03285/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "land"
  - "nasa"
  - "noaa"
  - "plant-productivity"
  - "surface"
  - "viirs"
---

# VNP15A2H：叶面积指数/光合有效辐射分量 8 天 L4 全球 500 米 SIN 网格 [已弃用]

英文原名：VNP15A2H: LAI/FPAR 8-Day L4 Global 500m SIN Grid [deprecated]

## 这是什么数据

可见红外成像辐射计套件（VIIRS）叶面积指数（LAI）与光合有效辐射分量（FPAR）第 1 版数据产品，以 500 米分辨率提供植被冠层信息（VNP15A2H）。VIIRS 传感器搭载于 NOAA/NASA 联合的 Suomi 国家极轨伙伴（Suomi NPP）卫星。LAI 是量化冠层单面叶面积的指数，FPAR 是 400 至 700 纳米入射太阳能量中被光合作用吸收的分量。本产品有意参照 Terra 与 Aqua 中分辨率成像光谱仪（MODIS）LAI/FPAR 业务算法设计，以促进地球观测系统（EOS）任务的连续性。

## 覆盖范围与时间

- 覆盖范围：空间：全球陆地；时间：2012 年至 2024 年（8 天合成）；分辨率：500 米。
- 时间范围：2012-01-17 至 2024-06-16

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Fpar | 光合有效辐射分量。 | 500 |  |
| FparExtra_QC | FPAR 的透传质量控制（QC） | 500 |  |
| FparLai_QC | LAI 与 FPAR 的质量 | 500 |  |
| FparStdDev | FPAR 标准差 | 500 |  |
| Lai | 叶面积指数 | 500 |  |
| LaiStdDev | LAI 标准差 | 500 |  |

## 能拿来做什么

- 在 Google Earth Engine 中调用该数据集，叠加行政区划、土地覆盖等图层做空间分析。
- 做长时间序列分析，提取区域统计值并导出图表与 GeoTIFF。
- 作为教学与科研示例数据，演示 Earth Engine 影像集合的筛选、合成与可视化流程。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NOAA/VIIRS/001/VNP15A2H');
```

- 数据集编号（Earth Engine ID）：`NOAA/VIIRS/001/VNP15A2H`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_VIIRS_001_VNP15A2H
* [User's Guide](https://lpdaac.usgs.gov/documents/126/VNP15_User_Guide.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/125/VNP15_ATBD.pdf)
* [General Documentation](https://lpdaac.usgs.gov/products/vnp15a2hv001/)
* [Land Product Quality Assessment website](https://landweb.modaps.eosdis.nasa.gov/browse?sensor=VIIRS&sat=SNPP)

## 许可与引用

- 许可：proprietary
- 关键词：land, nasa, noaa, plant-productivity, surface, viirs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/VIIRS/VNP15A2H.001

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [VNP13A1.001：VIIRS 植被指数 16 天 500 米 [已弃用]](/pages/e2cab212/)
- [VNP22Q2：地表物候逐年 L3 全球 500 米 SIN 网格 [已弃用]](/pages/985a7db1/)
- [AG100：ASTER 全球发射率数据集 100 米 V003](/pages/3510f165/)
- [CSIRO 全球生物多样性指标](/pages/5e19a751/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
