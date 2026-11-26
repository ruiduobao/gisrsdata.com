---
title: "MODIS Terra 每日 EVI"
date: 2026-11-03 12:00:00
permalink: /pages/a6c681c3/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "daily"
  - "evi"
  - "global"
  - "mod09ga"
  - "modis"
  - "surface-reflectance"
  - "terra"
  - "usgs"
  - "vegetation-indices"
---

# MODIS Terra 每日 EVI

英文原名：MODIS Terra Daily EVI

## 这是什么数据

增强植被指数（EVI）由每个场景的近红外、红与蓝波段生成，值域为 −1.0 至 1.0。细节见 [Huete 等（2002）](https://www.sciencedirect.com/science/article/pii/S0034425702000962)。本产品由 MODIS/006/MOD09GA 地表反射率合成生成。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2000 年至 2023 年；分辨率：约 463.3 米。
- 时间范围：2000-02-24 至 2023-02-17

## 分辨率与规格

- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| EVI | 增强植被指数。 | 463.312716528 |  |

## 能拿来做什么

- 植被与地表指数分析
- 火灾与雪盖专题应用
- 长时间序列监测

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/MOD09GA_006_EVI');
```

- 数据集编号（Earth Engine ID）：`MODIS/MOD09GA_006_EVI`
- 提供方：Google、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_MOD09GA_006_EVI

## 许可与引用

- 许可：proprietary
- 关键词：daily, evi, global, mod09ga, modis, surface-reflectance, terra, usgs, vegetation-indices
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CSIRO 全球生物多样性指标](/pages/5e19a751/)
- [ESA CCI 地上生物量（2007、2010、2015–2022，v6.0）](/pages/e9028b43/)
- [GCOM-C/SGLI 三级叶面积指数产品（V1）](/pages/099c4e7b/)
- [GCOM-C/SGLI 三级叶面积指数产品（V2）](/pages/9acc1a9f/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
