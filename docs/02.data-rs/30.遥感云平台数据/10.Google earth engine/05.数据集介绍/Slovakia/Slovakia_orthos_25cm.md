---
title: "斯洛伐克正射影像"
date: 2026-11-03 12:00:00
permalink: /pages/98803e4e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "orthophotos"
  - "rgb"
---

# 斯洛伐克正射影像

英文原名：Slovakia orthophotos

## 这是什么数据

斯洛伐克共和国正射影像镶嵌是一组彩色正射影像，连接线处无重叠、无间隙、无可见的亮度与颜色差异。

更多信息见 [斯洛伐克正射影像文档](https://www.geoportal.sk/files/zbgis/orto/technicka_sprava_ortofotomozaika_sr_2017-2019.pdf)。

## 覆盖范围与时间

- 覆盖范围：空间：斯洛伐克全国；时间：2017 年至 2020 年；分辨率：0.25 米。
- 时间范围：2017-01-01 至 2020-01-01

## 分辨率与规格

- 空间分辨率：约 0.25 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| R | 红 | 0.25 |  |
| G | 绿 | 0.25 |  |
| B | 蓝 | 0.25 |  |

## 能拿来做什么

- 作为高分辨率地图底图与实景核查参考。
- 做城市、农田与基础设施的精细制图。
- 为变化检测提供厘米级影像样本。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('Slovakia/orthos/25cm');
```

- 数据集编号（Earth Engine ID）：`Slovakia/orthos/25cm`
- 提供方：Slovakia orthophotomosaic、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/Slovakia_orthos_25cm

## 许可与引用

- 许可：proprietary
- 关键词：orthophotos, rgb
- 数据引用：GKU Bratislava, NLC

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ALOS AVNIR-2 正射影像（ORI）](/pages/d4abf354/)
- [ALOS-2 PALSAR-2 条带模式 2.1 级产品（2024 年 1 月能登地震应急观测）](/pages/b836b19e/)
- [ASTER L1T 辐射亮度影像](/pages/b48e6fb4/)
- [Cloud Score+ S2_HARMONIZED V1](/pages/4a61128e/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
