---
title: "树木邻近人口（TPP）1.0"
date: 2026-11-03 12:00:00
permalink: /pages/4e1ad679/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "agriculture"
  - "fao"
  - "forest"
  - "global"
  - "plant-productivity"
  - "population"
  - "rural-area"
---

# 树木邻近人口（TPP）1.0

英文原名：Tree proximate people (TPP) 1.0

## 这是什么数据

「树木邻近人口」（TPP）是为森林合作伙伴关系（CPF）森林相关指标全球核心集（GCS）指标 #13「极端贫困的森林依赖人口数量」的开发作出贡献的数据集之一。TPP 数据集提供树木邻近人口（林外树木）的 4 种不同估算，均为 2019 年、全球范围、像元大小 100 米。[进一步了解该数据集。]( https://data.apps.fao.org/catalog/dcat/tree-proximate-people)

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：2019-01-01 至 2019-01-01

## 分辨率与规格

- 空间分辨率：约 0.0009 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| TPP_1km | 居住在树冠覆盖率至少 10% 的农业用地内或距其 1 公里以内的人口数量 | 0.0009 |  |
| TPP_1km_cropland | 居住在树冠覆盖率至少 10% 的耕地内或距其 1 公里以内的人口数量 | 0.0009 |  |
| TPP_500m | 居住在树冠覆盖率至少 10% 的农业用地内或距其 500 米以内的人口数量 | 0.0009 |  |
| TPP_500m_cropland | 居住在树冠覆盖率至少 10% 的耕地内或距其 500 米以内的人口数量 | 0.0009 |  |

## 能拿来做什么

- 森林依赖人口与贫困指标估算
- 森林周边社区生计分析
- 森林保护与发展规划

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('FAO/SOFO/1/TPP');
```

- 数据集编号（Earth Engine ID）：`FAO/SOFO/1/TPP`
- 提供方：FAO Forestry Division (TPP 500m cropland)、FAO Forestry Division (TPP 1km cropland)、FAO Forestry Division (TPP 500m agricultural)、FAO Forestry Division (TPP 1km agricultural)、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/FAO_SOFO_1_TPP

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：agriculture, fao, forest, global, plant-productivity, population, rural-area
- 数据引用：FAO 2022. The State of the World's Forests (SOFO) - Forest pathways for
green recovery and building inclusive, resilient and sustainable
economies. FAO, Rome.
[https://www.fao.org/documents/card/en/c/cb9360en](
  https://www.fao.org/documents/card/en/c/cb9360en)

- DOI：10.1016/j.oneear.2020.08.016

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [Forest proximate people (FPP) 1.0](/pages/7f9ed16d/)
- [LandScan 高清人口数据：乌克兰（2022 年 1 月）](/pages/c7a57ce4/)
- [全球网格人口 GPWv4.11：人口密度](/pages/f230ed9d/)
- [全球网格人口 GPWv4.11：人口计数](/pages/9cd921b2/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
