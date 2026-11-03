---
title: "GFSAD1000: Cropland Extent 1km Multi-Study Crop Mask, Global Food-Support Analysis Data"
date: 2026-11-03 12:00:00
permalink: /pages/c8c720f3/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "agriculture"
  - "crop"
  - "gfsad"
  - "landcover"
  - "usgs"
---

# GFSAD1000: Cropland Extent 1km Multi-Study Crop Mask, Global Food-Support Analysis Data

## 数据集简介

The GFSAD is a NASA-funded project to provide high-resolution global
cropland data and their water use that contributes towards global food
security in the twenty-first century. The GFSAD products are derived
through multi-sensor remote sensing data (e.g., Landsat, MODIS, AVHRR),
secondary data, and field-plot data and aims at documenting cropland
dynamics.

At a nominal 1km scale, V0.1 provides the spatial distribution of a
disaggregated five-class global cropland extent map derived from four
major studies: Thenkabail et al. (2009a, 2011), Pittman et al. (2010),
Yu et al. (2013), and Friedl et al. (2010). V1.0 is a 5-class product that
provides information on global cropland extent and irrigated versus rainfed
cropping. There is no crop type or crop type dominance information. Cropping
intensity (single, double, triple, and continuous crops) can be obtained for
every pixel using time-series remote sensing data. The GFSAD1000 nominal
2010 product was created with data from 2007 to 2012.

## 基本信息

- 数据集编号（Earth Engine ID）：`USGS/GFSAD1000_V1`
- 数据类型：影像（Image）
- 提供方：Global Food Security-support Analysis Data at 30m Project (GFSAD30)、Google Earth Engine
- 时间范围：2010-01-01 至 2010-01-01
- 空间分辨率：1000 米
- 许可：proprietary
- 关键词：agriculture, crop, gfsad, landcover, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| landcover | Crop mask class descriptions | 1000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('USGS/GFSAD1000_V1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/USGS_GFSAD1000_V1
- 数据引用：[Teluguntla, P., Thenkabail, P.S., Xiong, J., Gumma, M.K., Giri, C., Milesi,
C., Ozdogan, M., Congalton, R., Tilton, J., Sankey, T.R., Massey, R.,
Phalke, A., and Yadav, K. 2014. Global Cropland Area Database (GCAD)
derived from Remote Sensing in Support of Food Security in the Twenty-first
Century: Current Achievements and Future Possibilities. Chapter 7, Vol. II.
Land Resources: Monitoring, Modelling, and Mapping, Remote Sensing Handbook
edited by Prasad S. Thenkabail. In Press.](https://lpdaac.usgs.gov/documents/173/GFSAD1K_ATBD.pdf)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
