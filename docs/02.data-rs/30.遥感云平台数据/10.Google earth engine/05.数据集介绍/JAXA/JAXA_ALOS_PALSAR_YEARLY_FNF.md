---
title: "全球三类 PALSAR-2/PALSAR 森林/非森林图"
date: 2026-11-03 12:00:00
permalink: /pages/825386c3/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "alos"
  - "alos2"
  - "classification"
  - "eroc"
  - "forest"
  - "forest-biomass"
  - "jaxa"
  - "landcover"
  - "palsar"
  - "palsar2"
  - "sar"
---

# 全球三类 PALSAR-2/PALSAR 森林/非森林图

英文原名：Global 3-class PALSAR-2/PALSAR Forest/Non-Forest Map

## 这是什么数据

该数据集另有 2017–2020 年的四类新版本，见 [JAXA/ALOS/PALSAR/YEARLY/FNF4](JAXA_ALOS_PALSAR_YEARLY_FNF4.html)。

全球森林/非森林图（FNF）通过对全球 25 米分辨率 PALSAR-2/PALSAR SAR 镶嵌图的 SAR 影像（后向散射系数）分类生成：后向散射强的像元划为"森林"，后向散射弱的像元划为"非森林"。这里"森林"定义为面积大于 0.5 公顷、森林覆盖度超过 10% 的天然林，该定义与联合国粮食及农业组织（FAO）的定义相同。由于森林的雷达后向散射随区域（气候带）而异，森林/非森林分类使用与区域相关的后向散射阈值进行。分类精度使用实地照片与高分辨率光学卫星影像检验。更详细信息见提供方的[数据集说明](https://www.eorc.jaxa.jp/ALOS/en/palsar_fnf/DatasetDescription_PALSAR2_Mosaic_FNF_revE.pdf)。

注意：

* 高纬度森林区域的后向散射值在不同路径之间可能差异显著，这是冬季树木冻结导致后向散射强度变化所致。请注意这可能影响森林/非森林分类。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2007 年至 2018 年；分辨率：25 米。
- 时间范围：2007-01-01 至 2018-01-01

## 分辨率与规格

- 空间分辨率：约 25 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| fnf | 森林/非森林土地覆盖分类。 | 25 |  |

## 能拿来做什么

- 全球森林覆盖制图与变化监测
- REDD+ 与碳储量评估
- 土地覆盖分类验证

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('JAXA/ALOS/PALSAR/YEARLY/FNF');
```

- 数据集编号（Earth Engine ID）：`JAXA/ALOS/PALSAR/YEARLY/FNF`
- 提供方：JAXA EORC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JAXA_ALOS_PALSAR_YEARLY_FNF

## 许可与引用

- 许可：proprietary
- 关键词：alos, alos2, classification, eroc, forest, forest-biomass, jaxa, landcover, palsar, palsar2, sar
- 数据引用：Masanobu Shimada, Takuya Itoh, Takeshi Motooka, Manabu Watanabe,
Shiraishi Tomohiro, Rajesh Thapa, and Richard Lucas, "New Global
Forest/Non-forest Maps from ALOS PALSAR Data (2007-2010)", Remote Sensing
of Environment, 155, pp. 13-31, December 2014.
[doi:10.1016/j.rse.2014.04.014.](https://doi.org/10.1016/j.rse.2014.04.014)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [Global 4-class PALSAR-2/PALSAR Forest/Non-Forest Map](/pages/9f66b2fd/)
- [CSP 全球人类改造指数（gHM）](/pages/1227f44f/)
- [ESA WorldCereal 10 米 v100](/pages/76b102d2/)
- [ESA WorldCereal 活跃耕地 10 米 v100](/pages/dd6f101f/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
