---
title: "海洋水色 SMI：标准映射影像 SeaWiFS 数据"
date: 2026-11-03 12:00:00
permalink: /pages/402b2c43/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "biology"
  - "chlorophyll"
  - "nasa"
  - "oceandata"
  - "oceans"
  - "reflectance"
  - "seawifs"
  - "temperature"
  - "weather"
---

# 海洋水色 SMI：标准映射影像 SeaWiFS 数据

英文原名：Ocean Color SMI: Standard Mapped Image SeaWiFS Data

## 这是什么数据

此三级产品包括在 [EOSDIS](https://earthdata.nasa.gov/about) 下生产或收集的海洋水色与卫星海洋生物学数据。

本数据集可用于研究海岸带生物学与水文学、海岸海洋栖息地多样性与地理分布的变化、生物地球化学通量及其随时间对地球海洋与气候的影响，以及气候与环境变率与变化对海洋生态系统及其支持的生物多样性的影响。

比例因子与偏移已应用。

- 本数据集有若干缺失数据日期。例如，2009-04-29 至 2009-12-01 之间的大多数日期缺失。

- POC 的估计值可能是数据在无缩放的情况下生成的结果。更多信息，请访问 [SeaWiFS OceanData](https://oceancolor.gsfc.nasa.gov/about/missions/seawifs)

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球海洋；时间范围：1997 年至 2010 年；分辨率：9,200 米。
- 时间范围：1997-09-04 至 2010-12-10

## 分辨率与规格

- 空间分辨率：约 9,200 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| chlor_a | 叶绿素 a 浓度。 | 9200 |  |
| poc | 颗粒有机碳。 | 9200 |  |
| Rrs_412 | 412 nm 波段的遥感反射率。 | 9200 | 412nm |
| Rrs_443 | 443 nm 波段的遥感反射率。 | 9200 | 443nm |
| Rrs_490 | 469 nm 波段的遥感反射率。 | 9200 | 490nm |
| Rrs_510 | 488 nm 波段的遥感反射率。 | 9200 | 510nm |
| Rrs_555 | 555 nm 波段的遥感反射率。 | 9200 | 555nm |
| Rrs_670 | 531 nm 波段的遥感反射率。 | 9200 | 670nm |

## 能拿来做什么

- 海洋水色与初级生产力
- 叶绿素与水质监测
- 海洋生态系统研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/OCEANDATA/SeaWiFS/L3SMI');
```

- 数据集编号（Earth Engine ID）：`NASA/OCEANDATA/SeaWiFS/L3SMI`
- 提供方：NASA OB.DAAC at NASA Goddard Space Flight Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_OCEANDATA_SeaWiFS_L3SMI
* [Ocean Color Forum](https://oceancolor.gsfc.nasa.gov/forum/oceancolor/forum_show.pl)
* [Chlorophyll Forum](https://oceancolor.gsfc.nasa.gov/forum/oceancolor/forum_show.pl)
* [Algorithm Theoretical Basis Document (Chlorophyll)](https://oceancolor.gsfc.nasa.gov/resources/atbd/chlor_a)
* [Algorithm Theoretical Basis Document (Fluorescence Line Height)](https://oceancolor.gsfc.nasa.gov/resources/atbd/nflh)
* [Algorithm Theoretical Basis Document (Particulate Organic Carbon)](https://oceancolor.gsfc.nasa.gov/resources/atbd/poc)
* [Algorithm Theoretical Basis Document (Remote-Sensing Reflectance)](https://oceancolor.gsfc.nasa.gov/resources/atbd/rrs)
* [Processing History](https://oceancolor.gsfc.nasa.gov/data/reprocessing)

## 许可与引用

- 许可：proprietary
- 关键词：biology, chlorophyll, nasa, oceandata, oceans, reflectance, seawifs, temperature, weather
- 数据引用：NASA Goddard Space Flight Center, Ocean Ecology Laboratory, Ocean Biology
Processing Group. Sea-viewing Wide Field-of-view Sensor (SeaWiFS) Level 3
Binned Chlorophyll Data, NASA OB.DAAC, Greenbelt, MD, USA.
[SeaWiFS-ORBVIEW-2 Citations](https://oceancolor.gsfc.nasa.gov/resources/how-to-cite/)
The old DOI for this publication was
10.5067/ORBVIEW-2/SEAWIFS/L3B/CHL/2018.0.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [Ocean Color SMI: Standard Mapped Image MODIS Aqua Data](/pages/d1d3bb55/)
- [Ocean Color SMI: Standard Mapped Image MODIS Terra Data](/pages/ba36405e/)
- [ECMWF 近实时 IFS 海浪预报](/pages/2f7bc360/)
- [ECMWF 近实时 IFS 海浪预报（短截断）](/pages/423330ad/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
