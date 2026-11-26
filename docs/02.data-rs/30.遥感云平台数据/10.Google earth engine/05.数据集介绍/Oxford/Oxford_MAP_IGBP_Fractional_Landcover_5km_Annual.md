---
title: "牛津 MAP：疟疾地图项目 IGBP 分数土地覆盖"
date: 2026-11-03 12:00:00
permalink: /pages/fbd9fbca/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "igbp"
  - "landcover"
  - "landuse-landcover"
  - "map"
---

# 牛津 MAP：疟疾地图项目 IGBP 分数土地覆盖

英文原名：Oxford MAP: Malaria Atlas Project Fractional International Geosphere-Biosphere Programme Landcover

## 这是什么数据

本土地覆盖产品的底层数据集是 MODIS 年度土地覆盖产品（MCD12Q1）中的 IGBP 层。此数据由其分类格式（分辨率约 500 米）转换为分数产品，标明每个输出像元被 17 个土地覆盖类别中每一类覆盖的整数百分比（0–100）（每类一个波段）。

本数据集由疟疾地图项目（英国牛津大学大数据研究所，[https://malariaatlas.org/](https://malariaatlas.org/)）的 Harry Gibson 与 Daniel Weiss 制作。

## 覆盖范围与时间

- 覆盖范围：空间：全球；时间：2001 年至 2013 年（逐年）；分辨率：5,000 米。
- 时间范围：2001-01-01 至 2013-01-01

## 分辨率与规格

- 空间分辨率：约 5,000 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Overall_Class | 每个结果像元的主导类别 | 5000 |  |
| Water | 水体的百分比 | 5000 |  |
| Evergreen_Needleleaf_Forest | 常绿针叶林的百分比 | 5000 |  |
| Evergreen_Broadleaf_Forest | 常绿阔叶林的百分比 | 5000 |  |
| Deciduous_Needleleaf_Forest | 落叶针叶林的百分比 | 5000 |  |
| Deciduous_Broadleaf_Forest | 落叶阔叶林的百分比 | 5000 |  |
| Mixed_Forest | 混交林的百分比 | 5000 |  |
| Closed_Shrublands | 郁闭灌木地的百分比 | 5000 |  |
| Open_Shrublands | 开放灌木地的百分比 | 5000 |  |
| Woody_Savannas | 木本稀树草原的百分比 | 5000 |  |
| Savannas | 稀树草原的百分比 | 5000 |  |
| Grasslands | 草地的百分比 | 5000 |  |
| Permanent_Wetlands | 永久湿地的百分比 | 5000 |  |
| Croplands | 农田的百分比 | 5000 |  |
| Urban_And_Built_Up | 城市与建成区的百分比 | 5000 |  |
| Cropland_Natural_Vegetation_Mosaic | 农田/自然植被镶嵌的百分比 | 5000 |  |
| Snow_And_Ice | 冰雪的百分比 | 5000 |  |
| Barren_Or_Sparsely_Populated | 裸地或稀疏人口区的百分比 | 5000 |  |
| Unclassified | 未分类的百分比 | 5000 |  |
| No_Data | 无数据的百分比 | 5000 |  |

## 能拿来做什么

- 为疟疾传播环境因素研究提供长时序环境变量。
- 做疾病生态与媒介分布建模。
- 与其他健康地理数据联用分析。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('Oxford/MAP/IGBP_Fractional_Landcover_5km_Annual');
```

- 数据集编号（Earth Engine ID）：`Oxford/MAP/IGBP_Fractional_Landcover_5km_Annual`
- 提供方：Oxford Malaria Atlas Project、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/Oxford_MAP_IGBP_Fractional_Landcover_5km_Annual

## 许可与引用

- 许可：CC-BY-NC-SA-4.0
- 关键词：igbp, landcover, landuse-landcover, map
- 数据引用：Weiss, D.J., P.M. Atkinson, S. Bhatt, B. Mappin, S.I. Hay & P.W. Gething
(2014) An effective approach for gap-filling continental scale remotely
sensed time-series. ISPRS Journal of Photogrammetry and Remote Sensing,
98, 106-118.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CSP 全球人类改造指数（gHM）](/pages/1227f44f/)
- [Dynamic World V1（动态世界）](/pages/a78539ca/)
- [ESA WorldCereal 10 米 v100](/pages/76b102d2/)
- [ESA WorldCereal 活跃耕地 10 米 v100](/pages/dd6f101f/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
