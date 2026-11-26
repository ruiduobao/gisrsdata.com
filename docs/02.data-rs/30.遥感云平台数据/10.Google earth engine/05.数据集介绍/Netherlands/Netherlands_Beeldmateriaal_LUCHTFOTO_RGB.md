---
title: "荷兰正射影像"
date: 2026-11-03 12:00:00
permalink: /pages/15c7de2b/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "netherlands"
  - "orthophotos"
  - "rgb"
---

# 荷兰正射影像

英文原名：Netherlands orthophotos

## 这是什么数据

荷兰正射影像是一组彩色正射影像。每年采集两期全国航片：春季一期 7.5 厘米分辨率的无叶影像，夏季一期 25 厘米分辨率的有叶影像。

更多信息见 [荷兰正射影像文档](https://opendata.beeldmateriaal.nl/)。

## 覆盖范围与时间

- 覆盖范围：空间：荷兰全国；时间：2021 年至 2022 年（每年两期）；分辨率：0.08 米。
- 时间范围：2021-01-01 至 2022-12-31

## 分辨率与规格

- 空间分辨率：约 0.08 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| R | 红 | 0.08 |  |
| G | 绿 | 0.08 |  |
| B | 蓝 | 0.08 |  |

## 能拿来做什么

- 做厘米级城市与农田精细制图。
- 为变化检测与地物分类提供高分辨率样本。
- 作为地图底图与实景核查参考。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('Netherlands/Beeldmateriaal/LUCHTFOTO_RGB');
```

- 数据集编号（Earth Engine ID）：`Netherlands/Beeldmateriaal/LUCHTFOTO_RGB`
- 提供方：Beeldmateriaal Nederland、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/Netherlands_Beeldmateriaal_LUCHTFOTO_RGB

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：netherlands, orthophotos, rgb
- 数据引用：opendata.beeldmaterial.nl

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ALOS AVNIR-2 正射影像（ORI）](/pages/d4abf354/)
- [ALOS-2 PALSAR-2 条带模式 2.1 级产品（2024 年 1 月能登地震应急观测）](/pages/b836b19e/)
- [ASTER L1T 辐射亮度影像](/pages/b48e6fb4/)
- [Cloud Score+ S2_HARMONIZED V1](/pages/4a61128e/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
