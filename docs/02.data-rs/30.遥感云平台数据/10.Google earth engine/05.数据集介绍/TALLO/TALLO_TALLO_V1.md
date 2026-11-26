---
title: "Tallo：全球树木异速生长与冠层结构数据库 V1"
date: 2026-11-03 12:00:00
permalink: /pages/01461988/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "bigquery"
  - "biodiversity"
  - "biomass"
  - "canopy"
  - "ecosystems"
  - "forest"
  - "forest-biomass"
  - "height"
  - "species"
---

# Tallo：全球树木异速生长与冠层结构数据库 V1

英文原名：Tallo: A Global Tree Allometry and Crown Architecture Database V1

## 这是什么数据

Tallo 数据库是全球汇编的 498,838 条带地理参考与分类标准化的单木记录，来自全球 61,856 个采样点。涵盖 5,163 个树种、1,453 个属与 187 个植物科，Tallo 提供所有主要陆地生物群系中单木的茎干直径（DBH）、总树高与平均冠幅半径测量。

创建该数据库是为了支持森林生态学、遥感与全球植被碳建模研究。详见 [Jucker 等（2022）](https://doi.org/10.1111/gcb.16302)。

本数据集可通过 BigQuery 获取：`earth-engine-public-data.tallo.tallo_v1`。

## 覆盖范围与时间

- 覆盖范围：空间：全球 61,856 个采样点；时间：2022 年发布；类型：表格（BigQuery）。
- 时间范围：2022-06-08 至 2022-06-09

## 分辨率与规格

- 数据类型：bigquery_table，在 Google Earth Engine 中调用

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| tree_id | STRING | Tallo 数据库中每条单木记录的唯一标识符 |
| division | STRING | 主要分类分部（被子植物或裸子植物） |
| family | STRING | 树的分类科（例如茜草科、松科、豆科） |
| genus | STRING | 树的分类属（例如 Coprosma、Pinus、Quercus） |
| species | STRING | 树种的双名法学名（例如 Coprosma ochracea） |
| latitude | DOUBLE | 采样位置的纬度（十进制度，WGS84） |
| longitude | DOUBLE | 采样位置的经度（十进制度，WGS84） |
| geo_point | GEOMETRY | 地理点几何（WGS84） |
| stem_diameter_cm | DOUBLE | 胸高处茎干直径（DBH），厘米 |
| height_m | DOUBLE | 总树高，米 |
| crown_radius_m | DOUBLE | 树的平均冠幅半径，米 |
| height_outlier | STRING | 树高测量的异常标志（Y = 异常，N = 有效） |
| crown_radius_outlier | STRING | 冠幅半径测量的异常标志（Y = 异常，N = 有效） |
| reference_id | INT | 将记录关联到贡献数据源引用的数值标识符 |

## 能拿来做什么

- 做树木异速生长方程与生物量估算的校准验证。
- 为激光雷达树高产品提供地面参考。
- 分析全球树木功能性状与冠层结构。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('TALLO/TALLO_V1');
```

- 数据集编号（Earth Engine ID）：`TALLO/TALLO_V1`
- 提供方：Tommaso Jucker / Selva Lab (University of Bristol)、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/TALLO_TALLO_V1

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：bigquery, biodiversity, biomass, canopy, ecosystems, forest, forest-biomass, height, species
- 数据引用：Jucker, T., Fischer, F. J., Chave, J., Coomes, D. A., Caspersen, J., Ali, A.,
... & Zavala, M. A. (2022). Tallo: A global tree allometry and crown
architecture database. Global Change Biology, 28(17), 5254-5268.
[doi:10.1111/gcb.16302](https://doi.org/10.1111/gcb.16302)

- DOI：10.1111/gcb.16302

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [AG100：ASTER 全球发射率数据集 100 米 V003](/pages/3510f165/)
- [CSIRO 全球生物多样性指标](/pages/5e19a751/)
- [ECOSTRESS 分片辅助 NDVI 与反照率 L2 全球 70 米 V002](/pages/a7bebe55/)
- [ECOSTRESS 地表温度与发射率 L2 全球 70 米 V002](/pages/f726b0e6/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
