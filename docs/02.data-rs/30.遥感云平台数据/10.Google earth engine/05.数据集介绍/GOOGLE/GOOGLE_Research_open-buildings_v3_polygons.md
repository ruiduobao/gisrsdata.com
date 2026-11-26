---
title: "开放建筑物 V3 多边形"
date: 2026-11-03 12:00:00
permalink: /pages/93c5617e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "africa"
  - "asia"
  - "building"
  - "built-up"
  - "open-buildings"
  - "population"
  - "south-asia"
  - "southeast-asia"
  - "structure"
  - "table"
---

# 开放建筑物 V3 多边形

英文原名：Open Buildings V3 Polygons

## 这是什么数据

这个大规模开放数据集由源自高分辨率 50 厘米卫星影像的建筑物轮廓组成。它包含 18 亿次建筑物检测，覆盖非洲、拉丁美洲、加勒比、南亚和东南亚。推理跨越的面积为 5800 万平方公里。

对于该数据集中的每栋建筑，我们包含描述其地面足迹的多边形、一个置信度分数（表示我们对这是建筑物的把握程度），以及与建筑物中心对应的 [Plus Code](https://plus.codes/)。没有关于建筑物类型、街道地址或几何形状之外的任何细节信息。

建筑物足迹可用于一系列重要应用：从人口估计、城市规划和人道主义响应，到环境与气候科学。该项目位于加纳，最初的重点是非洲大陆，并新增了南亚、东南亚、拉丁美洲和加勒比地区的更新。

推理于 2023 年 5 月进行。

更多细节见开放建筑物数据集的官方[网站](https://sites.research.google/open-buildings/)。

## 覆盖范围与时间

- 覆盖范围：非洲、拉丁美洲、加勒比、南亚和东南亚
- 时间范围：2023-05-30 至 2023-05-30

## 分辨率与规格

- 数据类型：矢量/表格（FeatureCollection），在 Google Earth Engine 中调用

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| area_in_meters | DOUBLE | 多边形的面积（平方米） |
| confidence | DOUBLE | 模型分配的置信度分数 [0.65;1.0] |
| full_plus_code | STRING | 建筑物多边形质心处的完整 [Plus Code](https://plus.codes/) |
| longitude_latitude | GEOMETRY | 多边形的质心 |

## 能拿来做什么

- 人口估计
- 城市规划与建成区制图
- 人道主义响应与灾害评估

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.FeatureCollection('GOOGLE/Research/open-buildings/v3/polygons');
```

- 数据集编号（Earth Engine ID）：`GOOGLE/Research/open-buildings/v3/polygons`
- 提供方：Google Research - Open Buildings、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_Research_open-buildings_v3_polygons

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：africa, asia, building, built-up, open-buildings, population, south-asia, southeast-asia, structure, table
- 数据引用：W. Sirko, S. Kashubin, M. Ritter, A. Annkah, Y.S.E. Bouchareb, Y. Dauphin,
D. Keysers, M. Neumann, M. Cisse, J.A. Quinn. Continental-scale building
detection from high resolution satellite imagery.
[arXiv:2107.12283](https://arxiv.org/abs/2107.12283), 2021.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [Open Buildings V1 Polygons [deprecated]](/pages/a6665342/)
- [Open Buildings V2 Polygons [deprecated]](/pages/42dbfeb4/)
- [GHSL: Degree of Urbanization 1975-2030 V2-0 (P2023A)](/pages/5396cca7/)
- [GHSL: Global built-up surface 10m (P2023A)](/pages/a10e4a06/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
