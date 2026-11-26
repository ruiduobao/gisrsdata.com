---
title: "VNP15A2H：LAI/FPAR 8 天四级全球 500 米 SIN 格网"
date: 2026-11-03 12:00:00
permalink: /pages/50cd4868/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "land"
  - "nasa"
  - "noaa"
  - "surface"
  - "vegetation-indices"
  - "viirs"
---

# VNP15A2H：LAI/FPAR 8 天四级全球 500 米 SIN 格网

英文原名：VNP15A2H: LAI/FPAR 8-Day L4 Global 500m SIN Grid

## 这是什么数据

可见光红外成像辐射计套件（VIIRS）叶面积指数（LAI）与光合有效辐射分数（FPAR）版本 1 数据产品以 500 米分辨率提供植被冠层信息（VNP15A2H）。VIIRS 传感器搭载于 NOAA/NASA 联合 Suomi 国家极轨伙伴（Suomi NPP）卫星。LAI 是量化冠层单侧叶面积的指数，FPAR 是通过 400 至 700 纳米光合作用吸收的入射太阳能分数。本产品特意仿照 Terra 与 Aqua 中分辨率成像光谱仪（MODIS）LAI/FPAR 业务算法设计，以促进地球观测系统（EOS）任务的连续性。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2012 年至 2026 年；分辨率：500 米。
- 时间范围：2012-01-17 至 2026-10-16

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Fpar | 光合有效辐射分数。 | 500 |  |
| FparExtra_QC | FPAR 的直通质量控制（QC）。 | 500 |  |
| FparLai_QC | LAI 与 FPAR 的质量。 | 500 |  |
| FparStdDev | FPAR 的标准差。 | 500 |  |
| Lai | 叶面积指数。 | 500 |  |
| LaiStdDev | LAI 的标准差。 | 500 |  |

## 能拿来做什么

- 地表参数监测
- 植被与土地覆盖研究
- VIIRS 数据应用

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/VIIRS/002/VNP15A2H');
```

- 数据集编号（Earth Engine ID）：`NASA/VIIRS/002/VNP15A2H`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_VIIRS_002_VNP15A2H
* [User's Guide](https://lpdaac.usgs.gov/documents/126/VNP15_User_Guide.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/125/VNP15_ATBD.pdf)
* [General Documentation](https://lpdaac.usgs.gov/products/vnp15a2hv002/)
* [Land Product Quality Assessment website](https://landweb.modaps.eosdis.nasa.gov/browse?sensor=VIIRS&sat=SNPP)

## 许可与引用

- 许可：proprietary
- 关键词：land, nasa, noaa, surface, vegetation-indices, viirs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/VIIRS/VNP15A2H.002

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [VNP13A1.002：VIIRS 植被指数 16 天 500 米](/pages/fed65b36/)
- [VNP22Q2.002：地表物候年度三级全球 500 米 SIN 格网](/pages/1fdf80f4/)
- [AG100：ASTER 全球发射率数据集 100 米 V003](/pages/3510f165/)
- [CSIRO 全球生物多样性指标](/pages/5e19a751/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
