---
title: "MODIS Aqua 每日 BAI [已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/14b202f7/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aqua"
  - "bai"
  - "daily"
  - "global"
  - "modis"
  - "myd09ga"
  - "surface-reflectance"
  - "usgs"
  - "vegetation-indices"
---

# MODIS Aqua 每日 BAI [已弃用]

英文原名：MODIS Aqua Daily BAI [deprecated]

## 这是什么数据

燃烧面积指数（BAI）由红与近红外波段生成，测量每个像元与参考光谱点（木炭的实测反射率）的光谱距离。本指数旨在强调火灾后影像中的木炭信号。细节见 [Chuvieco 等（2002）](https://www.tandfonline.com/doi/abs/10.1080/01431160210153129)。本产品由 MODIS/MYD09GA 地表反射率合成生成。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2002 年至 2017 年；分辨率：约 463.3 米。
- 时间范围：2002-07-04 至 2017-03-30

## 分辨率与规格

- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| BAI | 燃烧面积指数。 | 463.312716528 |  |

## 能拿来做什么

- 植被与地表指数分析
- 火灾与雪盖专题应用
- 长时间序列监测

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/MYD09GA_BAI');
```

- 数据集编号（Earth Engine ID）：`MODIS/MYD09GA_BAI`
- 提供方：Google、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_MYD09GA_BAI

## 许可与引用

- 许可：proprietary
- 关键词：aqua, bai, daily, global, modis, myd09ga, surface-reflectance, usgs, vegetation-indices
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CSIRO 全球生物多样性指标](/pages/5e19a751/)
- [ESA CCI 地上生物量（2007、2010、2015–2022，v6.0）](/pages/e9028b43/)
- [GCOM-C/SGLI 三级叶面积指数产品（V1）](/pages/099c4e7b/)
- [GCOM-C/SGLI 三级叶面积指数产品（V2）](/pages/9acc1a9f/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
