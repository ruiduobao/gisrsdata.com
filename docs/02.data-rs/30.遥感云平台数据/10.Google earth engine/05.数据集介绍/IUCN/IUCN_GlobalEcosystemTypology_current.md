---
title: "IUCN 全球生态系统类型学三级 v1.0"
date: 2026-11-03 12:00:00
permalink: /pages/fa6b2b5d/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "ecosystem"
  - "ecosystems"
  - "global"
  - "table"
---

# IUCN 全球生态系统类型学三级 v1.0

英文原名：IUCN Global Ecosystem Typology Level 3: 1.0

## 这是什么数据

全球生态系统类型学（Global Ecosystem Typology）是一套基于生态系统独特特征的类型分类体系，是一个全球分类系统，为描述与分类生态系统提供一致的框架。

全球生态系统类型学共六个层级。上面三级（界、功能生物群系、生态系统功能组）依据生态系统的总体特征分类，如其位置、优势植物生活型与生态过程；下面三级（区域生态系统子组、全球生态系统类型、亚全球生态系统类型）聚焦生态系统功能组内部的具体地理变体以及生物群落复合体及其相关物理环境，可更详细地认识特定生态系统。

本数据集聚焦全球生态系统类型学的第三级：生态系统功能组（Ecosystem Functional Group）。它被定义为生物群系内一组相关的生态系统，共享共同的生态驱动因素，而这些驱动因素又促成表征该组的相似生物性状。它由生物群系自上而下细分推导而来。

注：由于部分几何图形尺寸过大，已对每个几何图形应用简化算法以降低其复杂度：在不使与原始形状的距离移动超过 100 米的前提下，尽可能多地舍弃顶点。结果，表中约二十余行塌缩为面积为 0 的几何图形并被移除。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间：2023 年（v1.0 发布）；类型：矢量/表格数据。
- 时间范围：2023-09-14 至 2023-09-14

## 分辨率与规格

- 数据类型：矢量/表格（FeatureCollection），在 Google Earth Engine 中调用

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| efg_code | STRING | 生态系统功能组代码（如 "T1.1" = 热带/亚热带低地雨林）。完整分类体系见 [https://global-ecosystems.org/explore](https://global-ecosystems.org/explore)。 |
| map_code | STRING | 制图代码 |
| map_version | STRING | 制图版本 |
| occurrence | INT | 表示指定区域内该功能组是主要出现（1）还是次要出现（2）。 |

## 能拿来做什么

- 生态系统分类与制图
- 生物多样性与保护规划
- 生态评估与报告

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.FeatureCollection('IUCN/GlobalEcosystemTypology/current');
```

- 数据集编号（Earth Engine ID）：`IUCN/GlobalEcosystemTypology/current`
- 提供方：International Union for Conservation of Nature and Natural Resources、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/IUCN_GlobalEcosystemTypology_current

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：ecosystem, ecosystems, global, table
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CSP 全球人类改造指数（gHM）](/pages/1227f44f/)
- [ESA WorldCereal 10 米 v100](/pages/76b102d2/)
- [ESA WorldCereal 活跃耕地 10 米 v100](/pages/dd6f101f/)
- [ESA WorldCover 10 米 v100（2020）](/pages/69070083/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
