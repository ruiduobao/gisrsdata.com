---
title: "BigEarthNet v1（Sentinel-2 基准档案）"
date: 2026-11-03 12:00:00
permalink: /pages/06aa410b/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "chip"
  - "copernicus"
  - "corine-derived"
  - "label"
  - "landuse-landcover"
  - "ml"
  - "sentinel"
  - "tile"
---

# BigEarthNet v1（Sentinel-2 基准档案）

英文原名：TUBerlin/BigEarthNet/v1

## 这是什么数据

BigEarthNet 是一个新的大规模 Sentinel-2 基准档案，由 590,326 个 Sentinel-2 影像块组成。为构建 BigEarthNet，2017 年 6 月至 2018 年 5 月间在欧洲 10 个国家（奥地利、比利时、芬兰、爱尔兰、科索沃、立陶宛、卢森堡、葡萄牙、塞尔维亚、瑞士）获取了 125 个 Sentinel-2 瓦片。所有瓦片由 Sentinel-2 2A 级产品生成与格式化工具（sen2cor）做大气校正。然后，它们被划分为 590,326 个不重叠的影像块。每个影像块由 2018 年 CORINE 土地覆盖数据库（CLC 2018）提供的多个土地覆盖类别（即多标签）标注。

## 覆盖范围与时间

- 覆盖范围：空间：欧洲 10 国；时间：2017 年至 2018 年；分辨率：10–60 米（多波段）。
- 时间范围：2017-06-01 至 2018-05-31

## 分辨率与规格

- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| B1 | 气溶胶 | 60 | 443.9nm (S2A) / 442.3nm (S2B) |
| B2 | 蓝 | 10 | 496.6nm (S2A) / 492.1nm (S2B) |
| B3 | 绿 | 10 | 560nm (S2A) / 559nm (S2B) |
| B4 | 红 | 10 | 664.5nm (S2A) / 665nm (S2B) |
| B5 | 红边 1 | 20 | 703.9nm (S2A) / 703.8nm (S2B) |
| B6 | 红边 2 | 20 | 740.2nm (S2A) / 739.1nm (S2B) |
| B7 | 红边 3 | 20 | 782.5nm (S2A) / 779.7nm (S2B) |
| B8 | 近红外 | 10 | 835.1nm (S2A) / 833nm (S2B) |
| B9 | 水汽 | 60 | 945nm (S2A) / 943.2nm (S2B) |
| B10 | 卷云 | 60 | 1373.5nm (S2A) / 1376.9nm (S2B) |
| B11 | 短波红外 1 | 20 | 1613.7nm (S2A) / 1610.4nm (S2B) |
| B12 | 短波红外 2 | 20 | 2202.4nm (S2A) / 2185.7nm (S2B) |
| B8A | 红边 4 | 20 | 864.8nm (S2A) / 864nm (S2B) |

## 能拿来做什么

- 作为遥感影像分类与多标签学习的基准数据集。
- 训练与评估深度学习土地覆盖模型。
- 做 Sentinel-2 影像理解研究。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('TUBerlin/BigEarthNet/v1');
```

- 数据集编号（Earth Engine ID）：`TUBerlin/BigEarthNet/v1`
- 提供方：BigEarthNet、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/TUBerlin_BigEarthNet_v1

## 许可与引用

- 许可：proprietary
- 关键词：chip, copernicus, corine-derived, label, landuse-landcover, ml, sentinel, tile
- 数据引用：G. Sumbul, M. Charfuelan, B. Demir, V. Markl, BigEarthNet: A Large-Scale
Benchmark Archive for Remote Sensing Image Understanding, IEEE International
Conference on Geoscience and Remote Sensing Symposium, pp. 5901-5904,
Yokohama, Japan, 2019.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CSP 全球人类改造指数（gHM）](/pages/1227f44f/)
- [Dynamic World V1（动态世界）](/pages/a78539ca/)
- [ESA WorldCereal 10 米 v100](/pages/76b102d2/)
- [ESA WorldCereal 活跃耕地 10 米 v100](/pages/dd6f101f/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
