---
title: "GLCF：Landsat 树冠覆盖连续场（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/c133e62e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "forest"
  - "forest-biomass"
  - "glcf"
  - "landsat-derived"
  - "nasa"
  - "umd"
---

# GLCF：Landsat 树冠覆盖连续场（已弃用）

英文原名：GLCF: Landsat Tree Cover Continuous Fields [deprecated]

## 这是什么数据

Landsat 植被连续场（VCF）树冠覆盖图层估算每个 30 米像元内被高度超过 5 米的木本植被覆盖的水平地面百分比。数据代表 2000、2005 和 2010 三个标称时期，由 NASA/USGS 全球陆地调查（GLS）的 Landsat 数据汇编而成。该产品根据 GLS 影像选择，源自 Landsat-5 专题制图仪（TM）和/或 Landsat-7 增强专题制图仪 Plus（ETM+）的全部七个波段。

树冠覆盖，即给定高度以上木本植物植被（包括叶、茎、枝等）的比例化垂直投影面积，影响陆地能量与水分交换、光合作用与蒸腾、净初级生产力以及碳和养分通量。树冠覆盖还影响栖息地质量和野生动物移动、人类住宅地产价值及其他生态系统服务。VCF 产品的连续分类方案比传统的离散分类方案能更好地描绘土地覆盖梯度。对于森林变化（如毁林和退化）的探测与监测尤为重要的是，树冠覆盖提供了一个可度量的属性，可据以定义森林覆盖及其变化。树冠覆盖随时间的变化可用于监测和追溯特定地点的森林变化历史。

该数据集为 2000、2005、2010 三个年份时期生产，集合中每个可用的 WRS2 轨/行号都有一景影像。

## 覆盖范围与时间

- 覆盖范围：全球陆地
- 时间范围：2000-01-01 至 2010-12-31

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| tree_canopy_cover | 被树木覆盖的像元面积百分比。 | 30 |  |
| uncertainty | tree_canopy_cover 的 RMSE | 30 |  |
| source_index | 用于该像元的源影像的标识。它是逐影像元数据数组「sources」的索引。 | 30 |  |

## 能拿来做什么

- 全球树冠覆盖制图
- 森林变化与毁林监测
- 碳储量估算输入

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('GLCF/GLS_TCC');
```

- 数据集编号（Earth Engine ID）：`GLCF/GLS_TCC`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/GLCF_GLS_TCC

## 许可与引用

- 许可：proprietary
- 关键词：forest, forest-biomass, glcf, landsat-derived, nasa, umd
- 数据引用：Data citation: Tree Canopy Cover, {Year, ...}, Global Land Cover Facility.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CSIRO 全球生物多样性指标](/pages/5e19a751/)
- [全球 SPEI 干旱指数数据库（2.11 版）](/pages/2a1f609f/)
- [加拿大森林林龄图 2019（Landsat 衍生）](/pages/65b34141/)
- [全球 SPEI 干旱指数数据库（2.10 版，已弃用）](/pages/9bb9126f/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
