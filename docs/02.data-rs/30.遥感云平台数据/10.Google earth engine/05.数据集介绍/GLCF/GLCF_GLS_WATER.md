---
title: "GLCF：Landsat 全球内陆水体"
date: 2026-11-03 12:00:00
permalink: /pages/500a347f/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "glcf"
  - "landsat-derived"
  - "nasa"
  - "surface-ground-water"
  - "umd"
  - "water"
---

# GLCF：Landsat 全球内陆水体

英文原名：GLCF: Landsat Global Inland Water

## 这是什么数据

全球内陆水体数据集显示内陆地表水体，包括淡水和咸水湖泊、河流和水库。

从 GLS 2000 时期数据中识别出 3,650,723 平方公里的内陆水体，其中约四分之三位于北美和亚洲。北方森林和苔原拥有最大份额的内陆水体，约占全球总量的 40%。该数据与 MODIS 数据集以及美国和加拿大的 30 米分辨率数据集都表现出强线性相关性。残余误差主要来自水覆盖的季节性、冰雪和残余云。

该数据集对每个可用的 Landsat WRS2 轨/行号包含一景或多景影像。

## 覆盖范围与时间

- 覆盖范围：全球陆地
- 时间范围：2000-01-01 至 2000-12-31

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| water | 水体分类 | 30 |  |

## 能拿来做什么

- 全球内陆水体分布制图
- 湖泊与水库面积变化监测
- 水资源评估

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('GLCF/GLS_WATER');
```

- 数据集编号（Earth Engine ID）：`GLCF/GLS_WATER`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/GLCF_GLS_WATER
* [User's guide](https://lpdaac.usgs.gov/documents/1371/GFCC_User_Guide_V1.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/1370/GFCC_ATBD.pdf)

## 许可与引用

- 许可：proprietary
- 关键词：glcf, landsat-derived, nasa, surface-ground-water, umd, water
- 数据引用：Data Citation: Global Inland Water, {Year, ...}, Global Land Cover
Facility.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [全球网格人口 GPWv4.11：水体掩膜](/pages/d70c6d97/)
- [全球网格人口 GPWv4.11：水域面积](/pages/0f13e587/)
- [美国 BLM 土地健康野外样地数据（AIM TerrADat）](/pages/53c74382/)
- [Dynamic Surface Water Extent from Harmonized Landsat Sentinel-2 (DSWx-HLS) V1](/pages/0bb51b32/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
