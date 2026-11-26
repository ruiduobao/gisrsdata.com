---
title: "海洋水色 SMI：标准映射影像 MODIS Aqua 数据"
date: 2026-11-03 12:00:00
permalink: /pages/d1d3bb55/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "biology"
  - "chlorophyll"
  - "modis"
  - "nasa"
  - "oceandata"
  - "oceans"
  - "reflectance"
  - "sst"
  - "temperature"
  - "weather"
---

# 海洋水色 SMI：标准映射影像 MODIS Aqua 数据

英文原名：Ocean Color SMI: Standard Mapped Image MODIS Aqua Data

## 这是什么数据

此三级产品包括在 [EOSDIS](https://earthdata.nasa.gov/about) 下生产或收集的海洋水色与卫星海洋生物学数据。

本数据集可用于研究海岸带生物学与水文学、海岸海洋栖息地多样性与地理分布的变化、生物地球化学通量及其随时间对地球海洋与气候的影响，以及气候与环境变率与变化对海洋生态系统及其支持的生物多样性的影响。

比例因子与偏移已应用。

较新的数据集有缩放的 POC 值，而较旧的没有。此缩放消除了负值，但较旧的数据集仍保留负值，因此估计最小值为 -2147.48。更多信息，请访问 [Ocean Color Forum](https://oceancolor.gsfc.nasa.gov/forum/oceancolor/forum_show.pl)。

[MODIS-Aqua OceanData](https://oceancolor.gsfc.nasa.gov/about/missions/aqua/)

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球海洋；时间范围：2002 年至 2025 年；分辨率：4,616 米。
- 时间范围：2002-07-03 至 2025-11-30

## 分辨率与规格

- 空间分辨率：约 4,616 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| chlor_a | 叶绿素 a 浓度。 | 4616 |  |
| nflh | 归一化荧光线高度。 | 4616 |  |
| poc | 颗粒有机碳。 | 4616 |  |
| Rrs_412 | 412 nm 波段的遥感反射率。 | 4616 | 412nm |
| Rrs_443 | 443 nm 波段的遥感反射率。 | 4616 | 443nm |
| Rrs_469 | 469 nm 波段的遥感反射率。 | 4616 | 469nm |
| Rrs_488 | 488 nm 波段的遥感反射率。 | 4616 | 488nm |
| Rrs_531 | 531 nm 波段的遥感反射率。 | 4616 | 531nm |
| Rrs_547 | 547 nm 波段的遥感反射率。 | 4616 | 547nm |
| Rrs_555 | 555 nm 波段的遥感反射率。 | 4616 | 555nm |
| Rrs_645 | 645 nm 波段的遥感反射率。 | 4616 | 645nm |
| Rrs_667 | 667 nm 波段的遥感反射率。 | 4616 | 667nm |
| Rrs_678 | 678 nm 波段的遥感反射率。 | 4616 | 678nm |
| sst | 海表温度。 | 4616 |  |
| nsst | 夜间海表温度。 | 4616 |  |
| par | 光合有效辐射。 | 4616 |  |
| Kd_490 | 490 nm 漫衰减系数。 | 4616 |  |

## 能拿来做什么

- 海洋水色与初级生产力
- 叶绿素与水质监测
- 海洋生态系统研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/OCEANDATA/MODIS-Aqua/L3SMI');
```

- 数据集编号（Earth Engine ID）：`NASA/OCEANDATA/MODIS-Aqua/L3SMI`
- 提供方：NASA OB.DAAC at NASA Goddard Space Flight Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_OCEANDATA_MODIS-Aqua_L3SMI
* [Ocean Color Forum](https://oceancolor.gsfc.nasa.gov/forum/oceancolor/forum_show.pl)
* [Chlorophyll Forum](https://oceancolor.gsfc.nasa.gov/forum/oceancolor/forum_show.pl)
* [Algorithm Theoretical Basis Document (Chlorophyll)](https://oceancolor.gsfc.nasa.gov/resources/atbd/chlor_a)
* [Algorithm Theoretical Basis Document (Fluorescence Line Height)](https://oceancolor.gsfc.nasa.gov/resources/atbd/nflh)
* [Algorithm Theoretical Basis Document (Particulate Organic Carbon)](https://oceancolor.gsfc.nasa.gov/resources/atbd/poc)
* [Algorithm Theoretical Basis Document (Remote-Sensing Reflectance)](https://oceancolor.gsfc.nasa.gov/resources/atbd/rrs)
* [Processing History](https://oceancolor.gsfc.nasa.gov/data/reprocessing/V3.0/pace/)

## 许可与引用

- 许可：proprietary
- 关键词：biology, chlorophyll, modis, nasa, oceandata, oceans, reflectance, sst, temperature, weather
- 数据引用：NASA Goddard Space Flight Center, Ocean Ecology Laboratory, Ocean Biology
Processing Group. Moderate-resolution Imaging Spectroradiometer
(MODIS) Aqua Ocean Color Data, NASA OB.DAAC, Greenbelt, MD, USA.

*   DOI: 10.5067/AQUA/MODIS/L3M/CHL/2018 [unrecoverable]


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [Ocean Color SMI: Standard Mapped Image MODIS Terra Data](/pages/ba36405e/)
- [Ocean Color SMI: Standard Mapped Image SeaWiFS Data](/pages/402b2c43/)
- [ECMWF 近实时 IFS 海浪预报](/pages/2f7bc360/)
- [ECMWF 近实时 IFS 海浪预报（短截断）](/pages/423330ad/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
