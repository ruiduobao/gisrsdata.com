---
title: "AERDB_D3_VIIRS_SNPP.002：VIIRS/SNPP 深蓝气溶胶光学厚度逐日三级全球 1.0 度格网"
date: 2026-11-03 12:00:00
permalink: /pages/64c851e2/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aerosol"
  - "aot"
  - "atmosphere"
  - "daily"
  - "nasa"
  - "noaa"
  - "npp"
  - "viirs"
---

# AERDB_D3_VIIRS_SNPP.002：VIIRS/SNPP 深蓝气溶胶光学厚度逐日三级全球 1.0 度格网

英文原名：AERDB_D3_VIIRS_SNPP.002: VIIRS/SNPP Deep Blue Aerosol Optical Depth Daily L3 Global 1.0 Deg Grid

## 这是什么数据

可见光红外成像辐射计套件（VIIRS）深蓝三级逐日全球 1 度格网产品（AERDB_D3_VIIRS_SNPP）提供源自 Suomi 国家极轨伙伴（SNPP）VIIRS 传感器的逐日全球格网气溶胶参数。数据在陆地上使用深蓝（DB）算法生成，在海洋上使用陆地与海洋卫星气溶胶（SOAR）算法生成。

产品包括陆地、海洋与陆地/海洋组合场景下 550 nm 气溶胶光学厚度（AOT）的统计汇总（平均、最小、最大、计数与标准差），以及埃格斯特朗指数反演、海洋细模态分数估计与气溶胶类型分类。数据投影在规则的 1.0 度等角全球格网（EPSG:4326）上。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2012 年至 2026 年；分辨率：111,320 米。
- 时间范围：2012-03-01 至 2026-10-28

## 分辨率与规格

- 空间分辨率：约 111,320 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Aerosol_Optical_Thickness_550_Land_Count | 陆地 550 nm 气溶胶光学厚度反演的计数。 | 111320 |  |
| Aerosol_Optical_Thickness_550_Land_Maximum | 陆地 550 nm 最大气溶胶光学厚度。 | 111320 |  |
| Aerosol_Optical_Thickness_550_Land_Mean | 陆地 550 nm 平均气溶胶光学厚度。 | 111320 |  |
| Aerosol_Optical_Thickness_550_Land_Minimum | 陆地 550 nm 最小气溶胶光学厚度。 | 111320 |  |
| Aerosol_Optical_Thickness_550_Land_Ocean_Count | 陆地与海洋 550 nm 气溶胶光学厚度反演的总计数。 | 111320 |  |
| Aerosol_Optical_Thickness_550_Land_Ocean_Maximum | 陆地与海洋 550 nm 最大气溶胶光学厚度。 | 111320 |  |
| Aerosol_Optical_Thickness_550_Land_Ocean_Mean | 陆地与海洋 550 nm 平均气溶胶光学厚度。 | 111320 |  |
| Aerosol_Optical_Thickness_550_Land_Ocean_Minimum | 陆地与海洋 550 nm 最小气溶胶光学厚度。 | 111320 |  |
| Aerosol_Optical_Thickness_550_Land_Ocean_Standard_Deviation | 陆地与海洋 550 nm 气溶胶光学厚度的标准差。 | 111320 |  |
| Aerosol_Optical_Thickness_550_Land_Standard_Deviation | 陆地 550 nm 气溶胶光学厚度的标准差。 | 111320 |  |
| Aerosol_Optical_Thickness_550_Ocean_Count | 海洋 550 nm 气溶胶光学厚度反演的计数。 | 111320 |  |
| Aerosol_Optical_Thickness_550_Ocean_Maximum | 海洋 550 nm 最大气溶胶光学厚度。 | 111320 |  |
| Aerosol_Optical_Thickness_550_Ocean_Mean | 海洋 550 nm 平均气溶胶光学厚度。 | 111320 |  |
| Aerosol_Optical_Thickness_550_Ocean_Minimum | 海洋 550 nm 最小气溶胶光学厚度。 | 111320 |  |
| Aerosol_Optical_Thickness_550_Ocean_Standard_Deviation | 海洋 550 nm 气溶胶光学厚度的标准差。 | 111320 |  |
| Aerosol_Type_Land_Ocean_Histogram | 陆地与海洋气溶胶类型分类直方图。 | 111320 |  |
| Aerosol_Type_Land_Ocean_Mode | 陆地与海洋气溶胶类型分类的众数。 | 111320 |  |
| Angstrom_Exponent_Land_Maximum | 陆地最大埃格斯特朗指数。 | 111320 |  |
| Angstrom_Exponent_Land_Mean | 陆地平均埃格斯特朗指数。 | 111320 |  |
| Angstrom_Exponent_Land_Minimum | 陆地最小埃格斯特朗指数。 | 111320 |  |
| Angstrom_Exponent_Land_Ocean_Maximum | 陆地与海洋最大埃格斯特朗指数。 | 111320 |  |
| Angstrom_Exponent_Land_Ocean_Mean | 陆地与海洋平均埃格斯特朗指数。 | 111320 |  |
| Angstrom_Exponent_Land_Ocean_Minimum | 陆地与海洋最小埃格斯特朗指数。 | 111320 |  |
| Angstrom_Exponent_Land_Ocean_Standard_Deviation | 陆地与海洋埃格斯特朗指数的标准差。 | 111320 |  |
| Angstrom_Exponent_Land_Standard_Deviation | 陆地埃格斯特朗指数的标准差。 | 111320 |  |
| Angstrom_Exponent_Ocean_Maximum | 海洋最大埃格斯特朗指数。 | 111320 |  |
| Angstrom_Exponent_Ocean_Mean | 海洋平均埃格斯特朗指数。 | 111320 |  |
| Angstrom_Exponent_Ocean_Minimum | 海洋最小埃格斯特朗指数。 | 111320 |  |
| Angstrom_Exponent_Ocean_Standard_Deviation | 海洋埃格斯特朗指数的标准差。 | 111320 |  |
| Fine_Mode_Fraction_550_Ocean_Mean | 海洋 550 nm 平均细模态气溶胶体积/光学分数。 | 111320 |  |
| Fine_Mode_Fraction_550_Ocean_Standard_Deviation | 海洋 550 nm 细模态气溶胶分数的标准差。 | 111320 |  |
| Spectral_Aerosol_Optical_Thickness_Land_Count | 陆地光谱气溶胶光学厚度反演的计数。 | 111320 |  |
| Spectral_Aerosol_Optical_Thickness_Land_Mean | 陆地平均光谱气溶胶光学厚度。 | 111320 |  |
| Spectral_Aerosol_Optical_Thickness_Land_Standard_Deviation | 陆地光谱气溶胶光学厚度的标准差。 | 111320 |  |
| Spectral_Aerosol_Optical_Thickness_Ocean_Count | 海洋光谱气溶胶光学厚度反演的计数。 | 111320 |  |
| Spectral_Aerosol_Optical_Thickness_Ocean_Mean | 海洋平均光谱气溶胶光学厚度。 | 111320 |  |
| Spectral_Aerosol_Optical_Thickness_Ocean_Standard_Deviation | 海洋光谱气溶胶光学厚度的标准差。 | 111320 |  |
| Unsuitable_Pixel_Fraction_Land_Ocean | 格网单元内被认为不适合气溶胶反演的像元分数。 | 111320 |  |

## 能拿来做什么

- 气溶胶光学厚度监测
- 大气与气候研究
- 空气质量分析

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/VIIRS/002/AERDB_D3_VIIRS_SNPP');
```

- 数据集编号（Earth Engine ID）：`NASA/VIIRS/002/AERDB_D3_VIIRS_SNPP`
- 提供方：NASA Atmosphere SIPS / LAADS DAAC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_VIIRS_002_AERDB_D3_VIIRS_SNPP
* [Product User Guide](https://ladsweb.modaps.eosdis.nasa.gov/api/v2/content/archives/Document%20Archive/Science%20Data%20Product%20Documentation/VIIRS_Deep_Blue_Aerosol_UG_v2_March_2025.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://ladsweb.modaps.eosdis.nasa.gov/api/v2/content/archives/Document%20Archive/Science%20Data%20Product%20Documentation/Product%20Generation%20Algorithms/VIIRS_Deep_Blue_Aerosol_ATBD_March_2025.pdf)
* [Deep Blue Project](https://deepblue.gsfc.nasa.gov/)
* [LAADS DAAC Product Page](https://ladsweb.modaps.eosdis.nasa.gov/missions-and-measurements/products/AERDB_D3_VIIRS_SNPP#documentation)

## 许可与引用

- 许可：CC0-1.0
- 关键词：aerosol, aot, atmosphere, daily, nasa, noaa, npp, viirs
- 数据引用：Hsu, C., et al. (2019). VIIRS/SNPP Deep Blue Aerosol Optical Depth Daily L3
Global 1.0 Deg Grid. NASA Goddard Space Flight Center,
[doi:10.5067/VIIRS/AERDB_D3_VIIRS_SNPP.002](https://doi.org/10.5067/VIIRS/AERDB_D3_VIIRS_SNPP.002)

- DOI：10.5067/VIIRS/AERDB_D3_VIIRS_SNPP.002

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [AERDB_D3_VIIRS_NOAA20.002: VIIRS/NOAA-20 Deep Blue Aerosol Optical Depth Daily L3 Global 1.0 Deg Grid](/pages/fa53b9c1/)
- [ERA5 逐小时数据 — ECMWF 气候再分析](/pages/2de85afd/)
- [ERA5 逐小时气压层数据 — ECMWF 气候再分析](/pages/e4d910e9/)
- [Google 街景空气质量：加利福尼亚州高分辨率空气污染制图](/pages/4a20302d/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
