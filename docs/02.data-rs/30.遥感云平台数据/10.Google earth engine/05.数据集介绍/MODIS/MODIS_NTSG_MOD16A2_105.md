---
title: "MOD16A2：MODIS 全球陆地蒸散 8 天全球 1 公里"
date: 2026-11-03 12:00:00
permalink: /pages/ad457568/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "8-day"
  - "evapotranspiration"
  - "global"
  - "mod16a2"
  - "modis"
  - "water-vapor"
---

# MOD16A2：MODIS 全球陆地蒸散 8 天全球 1 公里

英文原名：MOD16A2: MODIS Global Terrestrial Evapotranspiration 8-Day Global 1km

## 这是什么数据

MOD16A2 V105 产品提供 1 公里像元分辨率的 8 天全球陆地蒸散信息。蒸散（ET）是蒸发与植物蒸腾从地球表面到大气的总和。有了长期 ET 数据，气候、土地利用与生态系统扰动变化的影响可以被量化。

MOD16A2 产品由蒙大拿大学（UMT）数值陆地动力学模拟小组 [NTSG](https://www.ntsg.umt.edu/) 与 NASA 地球观测系统合作生产。有关所用算法的更多细节，见[算法理论基础文档](https://scholarworks.umt.edu/cgi/viewcontent.cgi?article=1267&context=ntsg_pubs)。

* 覆盖时段为 8 天，年末的最后一个时段例外，为 5 或 6 天。ET/PET 单位：2001、2002、2003、2005、2006、2007、2009、2010 年 12 月 27–31 日为 0.1 毫米/5 天；2000、2004、2008 年（闰年）12 月 26–31 日为 0.1 毫米/6 天。

** 对非洲雨林的一些像元，来自 MCD43B2/MCD43B3 的 MODIS 反照率数据整年都没有无云数据。因此，该年所有数据波段中的像元被掩膜。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2000 年至 2014 年；分辨率：1 公里。
- 时间范围：2000-01-01 至 2014-12-27

## 分辨率与规格

- 空间分辨率：约 1,000 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| ET | 覆盖时段内聚合的蒸散。 | 1000 |  |
| LE | 覆盖时段内每日平均的潜热通量。 | 1000 |  |
| PET | 覆盖时段内聚合的潜在蒸散。 | 1000 |  |
| PLE | 覆盖时段内每日平均的潜在潜热通量。 | 1000 |  |
| ET_QC | ET 质量控制。 | 1000 |  |

## 能拿来做什么

- 蒸散与水资源评估
- 干旱监测
- 灌溉管理

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/NTSG/MOD16A2/105');
```

- 数据集编号（Earth Engine ID）：`MODIS/NTSG/MOD16A2/105`
- 提供方：Numerical Terradynamic Simulation Group, The University of Montana、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_NTSG_MOD16A2_105

## 许可与引用

- 许可：proprietary
- 关键词：8-day, evapotranspiration, global, mod16a2, modis, water-vapor
- 数据引用：Qiaozhen Mu, Maosheng Zhao, Steven W. Running and Numerical Terradynamic
Simulation Group (2014): MODIS Global Terrestrial Evapotranspiration
(ET) Product MOD16A2 Collection 5.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CSIRO 全球生物多样性指标](/pages/5e19a751/)
- [ESA CCI 地上生物量（2007、2010、2015–2022，v6.0）](/pages/e9028b43/)
- [GCOM-C/SGLI 三级叶面积指数产品（V1）](/pages/099c4e7b/)
- [GCOM-C/SGLI 三级叶面积指数产品（V2）](/pages/9acc1a9f/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
