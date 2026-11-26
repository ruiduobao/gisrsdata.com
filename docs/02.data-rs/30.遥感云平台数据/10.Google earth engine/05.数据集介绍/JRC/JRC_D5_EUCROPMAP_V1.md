---
title: "欧洲作物类型图（EUCROPMAP）"
date: 2026-11-03 12:00:00
permalink: /pages/9750a230/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "agriculture"
  - "crop"
  - "eu"
  - "jrc"
  - "lucas"
  - "sentinel1-derived"
---

# 欧洲作物类型图（EUCROPMAP）

英文原名：EUCROPMAP

## 这是什么数据

欧洲作物类型图：2018 年基于 Sentinel-1 与 LUCAS Copernicus 2018 实地观测；2022 年结合 Sentinel-1、Sentinel-2 与辅助数据以及 LUCAS Copernicus 2022 观测。

基于独特的 [LUCAS 2018 Copernicus 实地调查](JRC_LUCAS_HARMO_THLOC_V1)，本数据集是第一幅欧盟尺度 10 米分辨率作物类型图，完全由 S1A 与 S1B 合成孔径雷达观测推导。2022 年数据集延续这一工作，采用多源方法，将 Sentinel-1 与 Sentinel-2 影像与温度、高程数据结合，并得到 LUCAS 2022 观测的支持。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：欧洲（欧盟）；时间：2018 年与 2022 年；分辨率：10 米。
- 时间范围：2018-01-01 至 2022-01-01

## 分辨率与规格

- 空间分辨率：约 10 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| classification | 主要作物特定土地覆盖分类。 | 10 |  |

## 能拿来做什么

- 欧洲作物类型制图
- 农业统计与产量评估
- 共同农业政策监测

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('JRC/D5/EUCROPMAP/V1');
```

- 数据集编号（Earth Engine ID）：`JRC/D5/EUCROPMAP/V1`
- 提供方：Joint Research Center (JRC)、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_D5_EUCROPMAP_V1

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：agriculture, crop, eu, jrc, lucas, sentinel1-derived
- 数据引用：d'Andrimont, R., Verhegghen, A., Lemoine, G., Kempeneers, P., Meroni, M.,
& Van der Velde, M. (2021). From parcel to continental scale-A first
European crop type map based on Sentinel-1 and LUCAS Copernicus in-situ
observations. Remote sensing of environment, 266, 112708.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CSIRO 全球生物多样性指标](/pages/5e19a751/)
- [ESA CCI 地上生物量（2007、2010、2015–2022，v6.0）](/pages/e9028b43/)
- [WaPOR 实际蒸散发与截留 2.0](/pages/f46d014b/)
- [WaPOR 实际蒸散发与截留 3.0](/pages/aca03f09/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
