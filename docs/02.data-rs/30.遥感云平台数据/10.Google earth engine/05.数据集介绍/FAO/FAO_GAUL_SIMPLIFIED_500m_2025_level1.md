---
title: "FAO GAUL 500 米简化版：全球行政区划图层 2025，一级行政区划"
date: 2026-11-03 12:00:00
permalink: /pages/b2ab3105/
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

# FAO GAUL 500 米简化版：全球行政区划图层 2025，一级行政区划

英文原名：FAO GAUL 500m Simplified: Global Administrative Unit Layers 2025, First-Level Administrative Units

## 这是什么数据

本 GAUL 数据集版本已简化至 500 米。

一级（国家以下层级）行政边界数据集是全球行政区划图层（GAUL 2025）数据系列的一部分，该系列包含世界上所有国家行政区划的信息，为表示行政区划的空间数据集的标准化作出贡献。

一级行政边界数据集区分州、省、部及等同层级。

GAUL 在国家、一级（如省/部）和二级（如区/县）行政层级上维护采用统一编码系统的全球图层。GAUL 的总体方法包括：a) 从最可靠的来源收集最佳可得数据；b) 将各国数据集组装为一个共同数据集，使国际边界与一个权威参考数据集（UN 2018）匹配；c) 将属性标准化为一个共同属性表；d) 使用 GAUL 编码系统生成代码；e) 应用拓扑；f) 为每个国家验证元数据（见 [GAUL 2024 集技术指南]( https://doi.org/10.4060/cd4262en)）。注意，某些行政区划是多多边形要素。

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：2025-01-01 至 2025-12-31

## 分辨率与规格

- 数据类型：矢量/表格（FeatureCollection），在 Google Earth Engine 中调用

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| FID | INT | 内部要素标识符 |
| ISO3_CODE | STRING | ISO 3166-1 alpha-3 国家代码 |
| MAP_CODE | STRING | 用于统计连接的地图代码 |
| GAUL0_CODE | INT | GAUL 国家代码 |
| GAUL0_NAME | STRING | 国家名称（联合国标准） |
| GAUL1_CODE | INT | 一级行政区划的 GAUL 代码 |
| GAUL1_NAME | STRING | 一级行政区划的名称 |
| CONTINENT | STRING | 大洲名称 |
| DISP_EN | STRING | 英文分级显示标签 |

## 能拿来做什么

- 全球行政区划边界底图
- 按行政区划汇总统计数据
- 制图与空间分析的边界参考

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.FeatureCollection('FAO/GAUL_SIMPLIFIED_500m/2025/level1');
```

- 数据集编号（Earth Engine ID）：`FAO/GAUL_SIMPLIFIED_500m/2025/level1`
- 提供方：FAO UN、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/FAO_GAUL_SIMPLIFIED_500m_2025_level1

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：borders, departments, fao, gaul, infrastructure-boundaries, provinces, states, table, un
- 数据引用：FAO. 2025. Global Administrative Unit Layers (GAUL). https://data.apps.fao.org. Licence: CC-BY-4.0


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [FAO GAUL 500m Simplified: Global Administrative Unit Layers 2015, Country Boundaries](/pages/6acf3380/)
- [FAO GAUL 500m Simplified: Global Administrative Unit Layers 2025, Second-Level Administrative Units](/pages/313e2d03/)
- [FAO GAUL 500m Simplified: Global Administrative Unit Layers 2015, First-Level Administrative Units [deprecated]](/pages/8265cbe1/)
- [FAO GAUL 500m Simplified: Global Administrative Unit Layers 2015, Second-Level Administrative Units [deprecated]](/pages/b570a7cd/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
