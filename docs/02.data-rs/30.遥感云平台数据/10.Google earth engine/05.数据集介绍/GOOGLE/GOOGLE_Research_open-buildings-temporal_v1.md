---
title: "开放建筑物时序数据 V1"
date: 2026-11-03 12:00:00
permalink: /pages/c54fd477/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "africa"
  - "annual"
  - "asia"
  - "building-height"
  - "built-up"
  - "height"
  - "high-resolution"
  - "open-buildings"
  - "population"
  - "south-asia"
  - "southeast-asia"
---

# 开放建筑物时序数据 V1

英文原名：Open Buildings Temporal V1

## 这是什么数据

开放建筑物 2.5D 时序数据集（Open Buildings 2.5D Temporal Dataset）包含建筑物存在、建筑物分数计数和建筑物高度数据，有效<sup>1</sup>空间分辨率为 4 米（栅格以 0.5 米分辨率提供），2016–2023 年逐年一期。它使用开源的低分辨率影像——来自 [Sentinel-2](https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-2) 集合——制作。

该数据集覆盖非洲、南亚、东南亚、拉丁美洲和加勒比地区。该数据的目标是支持致力于一系列社会公益应用的组织（例如政府、非营利组织、商业机构）。

通过演示版 Earth Engine [应用](https://goo.gle/open-buildings-temporal-demo-app) 交互式探索数据。（如果遇到 Earth Engine 应用的性能问题，请改试[这个](https://goo.gle/open-buildings-temporal-demo) Earth Engine 脚本。）

另外，如果你不是 Earth Engine 用户，可以使用[这个笔记本](https://colab.research.google.com/github/google-research/google-research/blob/master/building_detection/open_buildings_temporal_download_region_geotiffs.ipynb) 直接从 Google Cloud Storage 下载数据。

有关项目的更多细节和数据的常见问题，见项目[网站](https://sites.research.google/gr/open-buildings/temporal/)。

示例脚本：

* <code>[如何计算给定 AOI 的建筑物数量](https://code.earthengine.google.com/31ca8ccee65887ed2a152c8ea920bbd2)</code> * <code>[如何计算给定 AOI 的建成区面积](https://code.earthengine.google.com/46468628f66eb57c79753ae4c1c09f54)</code> * <code>[如何并排查看两年并比较](https://code.earthengine.google.com/e9e5a84d279d4b5669872a560e8329a2?hideCode=true)</code>

<small><sup>1</sup>等同于使用单帧 4 米分辨率影像的高分辨率模型所能达到的效果。</small>

## 覆盖范围与时间

- 覆盖范围：非洲、南亚、东南亚、拉丁美洲和加勒比地区
- 时间范围：2016-06-30 至 2023-06-30

## 分辨率与规格

- 空间分辨率：约 4 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| building_fractional_count | 推导给定 AOI 建筑物计数的数据来源。见随附的示例脚本。 | 4 |  |
| building_height | 相对于地形的建筑物高度，范围 [0 米, 100 米]。 | 4 |  |
| building_presence | 模型置信度值（即模型对该像元属于建筑物有多大把握），范围 [0.0, 1.0]。注意，模型置信度值未经校准，也就是说，如果某个像元的模型置信度为 0.8，并不意味着建筑物存在的实际可能性是 80%。因此，置信度值只能用于像元的相对排序（例如阈值化）。此外，模型置信度可能因地点和时间而异，取决于云覆盖、影像配准偏差等多种因素。 | 4 |  |

## 能拿来做什么

- 建筑物数量与高度逐年变化分析
- 人口估计与城市化监测
- 建成区扩张制图

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('GOOGLE/Research/open-buildings-temporal/v1');
```

- 数据集编号（Earth Engine ID）：`GOOGLE/Research/open-buildings-temporal/v1`
- 提供方：Google Research - Open Buildings、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_Research_open-buildings-temporal_v1

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：africa, annual, asia, building-height, built-up, height, high-resolution, open-buildings, population, south-asia, southeast-asia
- 数据引用：Wojciech Sirko, Emmanuel Asiedu Brempong, Juliana T. C. Marcos, Abigail
Annkah, Abel Korme, Mohammed Alewi Hassen, Krishna Sapkota, Tomer Shekel,
Abdoulaye Diack, Sella Nevo, Jason Hickey, John Quinn. [High-Resolution
Building and Road Detection from Sentinel-2](https://arxiv.org/abs/2310.11622), 2023.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ERA5 逐小时数据 — ECMWF 气候再分析](/pages/2de85afd/)
- [ERA5 逐小时气压层数据 — ECMWF 气候再分析](/pages/e4d910e9/)
- [MethaneAIR L3 甲烷浓度 v1](/pages/7172790c/)
- [MethaneAIR L4 点源 v1](/pages/32e81487/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
