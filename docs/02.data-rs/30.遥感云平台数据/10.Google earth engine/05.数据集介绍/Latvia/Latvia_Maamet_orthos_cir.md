---
title: "拉脱维亚彩红外（CIR）正射影像"
date: 2026-11-03 12:00:00
permalink: /pages/7a7e34c9/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "latvia"
  - "nrg"
  - "orthophotos"
---

# 拉脱维亚彩红外（CIR）正射影像

英文原名：Latvia Color InfraRed (CIR) orthophotos

## 这是什么数据

在拉脱维亚，正射影像图按 TKS-93 图幅分幅在拉脱维亚坐标系 LKS-92 TM 中编制（1:10000 图幅对应实地 5 × 5 公里）。正射影像图为拉脱维亚全境以 1:10000 比例尺编制，但对个别区域——城市与人口密集区——以 1:2000 或 1:1000 比例尺编制。

CIR 数据集有三个波段：近红外、红与绿。

更多信息见[拉脱维亚正射影像文档](https://www.lgia.gov.lv/lv/ortofotokartes-1)。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：拉脱维亚全境；时间范围：2007 年至 2018 年；分辨率：0.2 米。
- 时间范围：2007-01-01 至 2018-01-01

## 分辨率与规格

- 空间分辨率：约 0.2 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| N | 近红外。 | 0.2 |  |
| R | 红光。 | 0.2 |  |
| G | 绿光。 | 0.2 |  |

## 能拿来做什么

- 正射影像底图与量测
- 土地利用与地籍调查
- 城市与农业监测

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('Latvia/Maamet/orthos/cir');
```

- 数据集编号（Earth Engine ID）：`Latvia/Maamet/orthos/cir`
- 提供方：Latvia orthophotos、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/Latvia_Maamet_orthos_cir

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：latvia, nrg, orthophotos
- 数据引用：Latvijas Geospatial Information Agency

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [Latvia RGB orthophotos](/pages/21f79fb2/)
- [ALOS AVNIR-2 正射影像（ORI）](/pages/d4abf354/)
- [ALOS-2 PALSAR-2 条带模式 2.1 级产品（2024 年 1 月能登地震应急观测）](/pages/b836b19e/)
- [ASTER L1T 辐射亮度影像](/pages/b48e6fb4/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
