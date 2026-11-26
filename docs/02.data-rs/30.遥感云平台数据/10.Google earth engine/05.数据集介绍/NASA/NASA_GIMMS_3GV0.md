---
title: "GIMMS 源自 AVHRR 传感器的 NDVI（第三代）"
date: 2026-11-03 12:00:00
permalink: /pages/07e994dd/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "avhrr"
  - "gimms"
  - "nasa"
  - "ndvi"
  - "noaa"
  - "vegetation"
  - "vegetation-indices"
---

# GIMMS 源自 AVHRR 传感器的 NDVI（第三代）

英文原名：GIMMS NDVI From AVHRR Sensors (3rd Generation)

## 这是什么数据

GIMMS NDVI 由若干 NOAA 的 AVHRR 传感器为全球 1/12 度纬度/经度格网生成。GIMMS NDVI 数据集的最新版本命名为 NDVI3g（第三代源自 AVHRR 传感器的 GIMMS NDVI）。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：1981 年至 2013 年；分辨率：9,277 米。
- 时间范围：1981-07-01 至 2013-12-16

## 分辨率与规格

- 空间分辨率：约 9,277 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| ndvi | NDVI。 | 9277 |  |
| qa | QA 标志。 | 9277 |  |

## 能拿来做什么

- 植被长期变化监测
- 全球变化研究
- 干旱与生态评估

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/GIMMS/3GV0');
```

- 数据集编号（Earth Engine ID）：`NASA/GIMMS/3GV0`
- 提供方：NASA/NOAA、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GIMMS_3GV0

## 许可与引用

- 许可：proprietary
- 关键词：avhrr, gimms, nasa, ndvi, noaa, vegetation, vegetation-indices
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CSIRO 全球生物多样性指标](/pages/5e19a751/)
- [ESA CCI 地上生物量（2007、2010、2015–2022，v6.0）](/pages/e9028b43/)
- [GCOM-C/SGLI 三级叶面积指数产品（V1）](/pages/099c4e7b/)
- [GCOM-C/SGLI 三级叶面积指数产品（V2）](/pages/9acc1a9f/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
