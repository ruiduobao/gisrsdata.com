---
title: "MCD12C1.061 MODIS 土地覆盖类型年度全球 0.05 度 CMG"
date: 2026-11-03 12:00:00
permalink: /pages/3c641846/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "landcover"
  - "landuse-landcover"
  - "modis"
  - "nasa"
  - "usgs"
  - "yearly"
---

# MCD12C1.061 MODIS 土地覆盖类型年度全球 0.05 度 CMG

英文原名：MCD12C1.061 MODIS Land Cover Type Yearly Global 0.05 Deg CMG

## 这是什么数据

Terra 与 Aqua 组合的中分辨率成像光谱仪（MODIS）土地覆盖气候建模网格（CMG）（MCD12C1）版本 6.1 数据产品提供分幅 MCD12Q1 版本 6.1 数据产品的空间聚合与重投影版本。国际地圈-生物圈计划（IGBP）、马里兰大学（UMD）与叶面积指数（LAI）分类方案的地图以年度间隔、0.05 度（5,600 米）空间分辨率提供，覆盖 2001 年至 2022 年的全球。此外，还提供每个 0.05 度像元中每个土地覆盖类别的亚像元比例，以及三种土地分类方案中每种的聚合质量评估信息。

每个 MCD12C1 版本 6.1 分层数据格式 4（HDF4）文件提供多数土地覆盖类型 1–3、多数土地覆盖类型 1–3 评估与土地覆盖类型 1–3 每类百分比的图层。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2001 年至 2025 年；分辨率：5,600 米。
- 时间范围：2001-01-01 至 2025-01-01

## 分辨率与规格

- 空间分辨率：约 5,600 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Majority_Land_Cover_Type_1 | 多数土地覆盖类型 1：每个 0.05 度像元最可能的 IGBP 类别。 | 5600 |  |
| Majority_Land_Cover_Type_1_Assessment | 多数土地覆盖类型 1 评估：多数 IGBP 类别置信度。 | 5600 |  |
| Land_Cover_Type_1_Percent_Class_0 | 每个像元 IGBP 类别 0（水体）的覆盖百分比。 | 5600 |  |
| Land_Cover_Type_1_Percent_Class_1 | 每个像元 IGBP 类别 1（常绿针叶林）的覆盖百分比。 | 5600 |  |
| Land_Cover_Type_1_Percent_Class_2 | 每个像元 IGBP 类别 2（常绿阔叶林）的覆盖百分比。 | 5600 |  |
| Land_Cover_Type_1_Percent_Class_3 | 每个像元 IGBP 类别 3（落叶针叶林）的覆盖百分比。 | 5600 |  |
| Land_Cover_Type_1_Percent_Class_4 | 每个像元 IGBP 类别 4（落叶阔叶林）的覆盖百分比。 | 5600 |  |
| Land_Cover_Type_1_Percent_Class_5 | 每个像元 IGBP 类别 5（混交林）的覆盖百分比。 | 5600 |  |
| Land_Cover_Type_1_Percent_Class_6 | 每个像元 IGBP 类别 6（郁闭灌木地）的覆盖百分比。 | 5600 |  |
| Land_Cover_Type_1_Percent_Class_7 | 每个像元 IGBP 类别 7（开放灌木地）的覆盖百分比。 | 5600 |  |
| Land_Cover_Type_1_Percent_Class_8 | 每个像元 IGBP 类别 8（木本稀树草原）的覆盖百分比。 | 5600 |  |
| Land_Cover_Type_1_Percent_Class_9 | 每个像元 IGBP 类别 9（稀树草原）的覆盖百分比。 | 5600 |  |
| Land_Cover_Type_1_Percent_Class_10 | 每个像元 IGBP 类别 10（草地）的覆盖百分比。 | 5600 |  |
| Land_Cover_Type_1_Percent_Class_11 | 每个像元 IGBP 类别 11（永久湿地）的覆盖百分比。 | 5600 |  |
| Land_Cover_Type_1_Percent_Class_12 | 每个像元 IGBP 类别 12（耕地）的覆盖百分比。 | 5600 |  |
| Land_Cover_Type_1_Percent_Class_13 | 每个像元 IGBP 类别 13（城市与建成区）的覆盖百分比。 | 5600 |  |
| Land_Cover_Type_1_Percent_Class_14 | 每个像元 IGBP 类别 14（耕地/自然植被镶嵌）的覆盖百分比。 | 5600 |  |
| Land_Cover_Type_1_Percent_Class_15 | 每个像元 IGBP 类别 15（永久雪冰）的覆盖百分比。 | 5600 |  |
| Land_Cover_Type_1_Percent_Class_16 | 每个像元 IGBP 类别 16（裸地）的覆盖百分比。 | 5600 |  |
| Majority_Land_Cover_Type_2 | 多数土地覆盖类型 2：每个 0.05 度像元最可能的 UMD 类别。 | 5600 |  |
| Majority_Land_Cover_Type_2_Assessment | 多数土地覆盖类型 2 评估：多数 UMD 类别置信度。 | 5600 |  |
| Land_Cover_Type_2_Percent_Class_0 | 每个像元 UMD 类别 0（水体）的覆盖百分比。 | 5600 |  |
| Land_Cover_Type_2_Percent_Class_1 | 每个像元 UMD 类别 1（常绿针叶林）的覆盖百分比。 | 5600 |  |
| Land_Cover_Type_2_Percent_Class_2 | 每个像元 UMD 类别 2（常绿阔叶林）的覆盖百分比。 | 5600 |  |
| Land_Cover_Type_2_Percent_Class_3 | 每个像元 UMD 类别 3（落叶针叶林）的覆盖百分比。 | 5600 |  |
| Land_Cover_Type_2_Percent_Class_4 | 每个像元 UMD 类别 4（落叶阔叶林）的覆盖百分比。 | 5600 |  |
| Land_Cover_Type_2_Percent_Class_5 | 每个像元 UMD 类别 5（混交林）的覆盖百分比。 | 5600 |  |
| Land_Cover_Type_2_Percent_Class_6 | 每个像元 UMD 类别 6（郁闭灌木地）的覆盖百分比。 | 5600 |  |
| Land_Cover_Type_2_Percent_Class_7 | 每个像元 UMD 类别 7（开放灌木地）的覆盖百分比。 | 5600 |  |
| Land_Cover_Type_2_Percent_Class_8 | 每个像元 UMD 类别 8（木本稀树草原）的覆盖百分比。 | 5600 |  |
| Land_Cover_Type_2_Percent_Class_9 | 每个像元 UMD 类别 9（稀树草原）的覆盖百分比。 | 5600 |  |
| Land_Cover_Type_2_Percent_Class_10 | 每个像元 UMD 类别 10（草地）的覆盖百分比。 | 5600 |  |
| Land_Cover_Type_2_Percent_Class_11 | 每个像元 UMD 类别 11（耕地）的覆盖百分比。（注：「耕地」在 Majority_Land_Cover_Type_2 中值为 12 以与 IGBP 对应。） | 5600 |  |
| Land_Cover_Type_2_Percent_Class_12 | 每个像元 UMD 类别 12（城市与建成区）的覆盖百分比。（注：「城市与建成区」在 Majority_Land_Cover_Type_2 中值为 13 以与 IGBP 对应。） | 5600 |  |
| Land_Cover_Type_2_Percent_Class_13 | 每个像元 UMD 类别 13（裸地）的覆盖百分比。（注：「裸地」在 Majority_Land_Cover_Type_2 中值为 15。） | 5600 |  |
| Majority_Land_Cover_Type_3 | 多数土地覆盖类型 3：每个 0.05 度像元最可能的 LAI 类别。 | 5600 |  |
| Majority_Land_Cover_Type_3_Assessment | 多数土地覆盖类型 3 评估：多数 LAI 类别置信度。 | 5600 |  |
| Land_Cover_Type_3_Percent_Class_0 | 每个像元 LAI 类别 0（水体）的覆盖百分比。 | 5600 |  |
| Land_Cover_Type_3_Percent_Class_1 | 每个像元 LAI 类别 1（草地）的覆盖百分比。 | 5600 |  |
| Land_Cover_Type_3_Percent_Class_2 | 每个像元 LAI 类别 2（灌木地）的覆盖百分比。 | 5600 |  |
| Land_Cover_Type_3_Percent_Class_3 | 每个像元 LAI 类别 3（阔叶耕地）的覆盖百分比。 | 5600 |  |
| Land_Cover_Type_3_Percent_Class_4 | 每个像元 LAI 类别 4（稀树草原）的覆盖百分比。 | 5600 |  |
| Land_Cover_Type_3_Percent_Class_5 | 每个像元 LAI 类别 5（常绿阔叶林）的覆盖百分比。 | 5600 |  |
| Land_Cover_Type_3_Percent_Class_6 | 每个像元 LAI 类别 6（落叶阔叶林）的覆盖百分比。 | 5600 |  |
| Land_Cover_Type_3_Percent_Class_7 | 每个像元 LAI 类别 7（常绿针叶林）的覆盖百分比。 | 5600 |  |
| Land_Cover_Type_3_Percent_Class_8 | 每个像元 LAI 类别 8（落叶针叶林）的覆盖百分比。 | 5600 |  |
| Land_Cover_Type_3_Percent_Class_9 | 每个像元 LAI 类别 9（未植被）的覆盖百分比。 | 5600 |  |
| Land_Cover_Type_3_Percent_Class_10 | 每个像元 LAI 类别 10（城市与建成区）的覆盖百分比。 | 5600 |  |

## 能拿来做什么

- 土地覆盖与植被监测
- 全球变化研究
- 遥感算法验证

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/061/MCD12C1');
```

- 数据集编号（Earth Engine ID）：`MODIS/061/MCD12C1`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MCD12C1
* [User's Guide](https://lpdaac.usgs.gov/documents/1409/MCD12_User_Guide_V61.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/86/MCD12_ATBD.pdf)

## 许可与引用

- 许可：proprietary
- 关键词：landcover, landuse-landcover, modis, nasa, usgs, yearly
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD12C1.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MCD12Q1.061 MODIS Land Cover Type Yearly Global 500m](/pages/676a6522/)
- [MCD12Q2.006 Land Cover Dynamics Yearly Global 500m](/pages/7a9ce2ed/)
- [MOD44B.061 Terra Vegetation Continuous Fields Yearly Global 250m](/pages/6ca60ab0/)
- [CSP 全球人类改造指数（gHM）](/pages/1227f44f/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
