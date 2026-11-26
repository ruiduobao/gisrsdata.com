---
title: "FAO GAUL 500 米简化版：全球行政区划图层 2015，一级行政区划（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/8265cbe1/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "borders"
  - "departments"
  - "fao"
  - "gaul"
  - "infrastructure-boundaries"
  - "provinces"
  - "states"
  - "table"
  - "un"
---

# FAO GAUL 500 米简化版：全球行政区划图层 2015，一级行政区划（已弃用）

英文原名：FAO GAUL 500m Simplified: Global Administrative Unit Layers 2015, First-Level Administrative Units [deprecated]

## 这是什么数据

本 GAUL 数据集版本已简化至 500 米。

全球行政区划图层（GAUL）汇编并发布世界上所有国家行政区划的最佳可得信息，为表示行政区划的空间数据集的标准化作出贡献。GAUL 始终在国家、一级（如省/部）和二级（如区/县）行政层级上维护采用统一编码系统的全球图层。在有数据的情况下，它按国家提供直至三级、四级及更低层级的图层。总体方法包括：a) 从最可靠的来源收集最佳可得数据；b)（在可能时）确立地理要素的有效期；c) 基于联合国制图处（UNCS）提供的最新国家边界图，将选定数据加入全球图层；d) 使用 GAUL 编码系统生成代码；e) 向用户分发数据（见 [GAUL 分发集技术说明](https://researchgate.net/publication/390057047_The_Global_Administrative_Unit_Layers_GAUL_2024_Technical_guidelines)）。这些技术指南针对的是 2024 年版数据集，但其信息对这个较早版本仍然适用。注意，某些行政区划是多多边形要素。

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：2014-12-19 至 2014-12-19

## 分辨率与规格

- 数据类型：矢量/表格（FeatureCollection），在 Google Earth Engine 中调用

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| ADM0_CODE | INT | GAUL 国家代码 |
| ADM0_NAME | STRING | 联合国国家名称 |
| DISP_AREA | STRING | 未定居领土：「Yes」或「No」 |
| STATUS | STRING | 国家的状态 |
| Shape_Area | DOUBLE | 形状面积 |
| Shape_Leng | DOUBLE | 形状长度 |
| ADM1_CODE | INT | 一级行政区划的 GAUL 代码 |
| ADM1_NAME | STRING | 一级行政区划的名称 |
| EXP1_YEAR | INT | 行政区划的失效年份 |
| STR1_YEAR | INT | 行政区划的设立年份 |

## 能拿来做什么

- 全球行政区划边界底图
- 按行政区划汇总统计数据
- 制图与空间分析的边界参考

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.FeatureCollection('FAO/GAUL_SIMPLIFIED_500m/2015/level1');
```

- 数据集编号（Earth Engine ID）：`FAO/GAUL_SIMPLIFIED_500m/2015/level1`
- 提供方：FAO UN、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/FAO_GAUL_SIMPLIFIED_500m_2015_level1

## 许可与引用

- 许可：proprietary
- 关键词：borders, departments, fao, gaul, infrastructure-boundaries, provinces, states, table, un
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [FAO GAUL 500m Simplified: Global Administrative Unit Layers 2015, Country Boundaries](/pages/6acf3380/)
- [FAO GAUL 500m Simplified: Global Administrative Unit Layers 2025, First-Level Administrative Units](/pages/b2ab3105/)
- [FAO GAUL 500m Simplified: Global Administrative Unit Layers 2025, Second-Level Administrative Units](/pages/313e2d03/)
- [FAO GAUL 500m Simplified: Global Administrative Unit Layers 2015, Second-Level Administrative Units [deprecated]](/pages/b570a7cd/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
