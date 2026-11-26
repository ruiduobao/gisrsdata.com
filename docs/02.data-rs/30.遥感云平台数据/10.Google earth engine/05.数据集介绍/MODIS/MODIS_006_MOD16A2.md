---
title: "MOD16A2.006 Terra 净蒸散 8 天全球 500 米（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/75d3d2c3/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "8-day"
  - "evapotranspiration"
  - "global"
  - "mod16a2"
  - "modis"
  - "nasa"
  - "water-vapor"
---

# MOD16A2.006 Terra 净蒸散 8 天全球 500 米（已弃用）

英文原名：MOD16A2.006: Terra Net Evapotranspiration 8-Day Global 500m [deprecated]

## 这是什么数据

MOD16A2 版本 6 蒸散/潜热通量产品是一个像元分辨率 500 米的 8 天合成产品。MOD16 数据产品集合使用的算法基于 Penman-Monteith 方程的逻辑，包括每日气象再分析数据输入以及 MODIS 遥感数据产品，如植被属性动力学、反照率与土地覆盖。

两个蒸散层（ET 与 PET）的像元值是合成时段内全部八天的总和。两个潜热层（LE 与 PLE）的像元值是合成时段内全部八天的平均值。注意，每年最后一个 8 天时段是 5 或 6 天的合成时段，取决于年份。

根据[数据集文档的「图层」部分](https://lpdaac.usgs.gov/products/mod16a2v006)，填充值 32761 至 32767 的类别分配可能不准确。它们不包括在 EE 资产中。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2001 年至 2023 年；分辨率：500 米。
- 时间范围：2001-01-01 至 2023-02-02

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| ET | 总蒸散。 | 500 |  |
| LE | 平均潜热通量。 | 500 |  |
| PET | 总潜在蒸散。 | 500 |  |
| PLE | 平均潜在潜热通量。 | 500 |  |
| ET_QC | 蒸散质量控制标志。 | 500 |  |

## 能拿来做什么

- 蒸散与水资源评估
- 干旱监测
- 灌溉管理

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/006/MOD16A2');
```

- 数据集编号（Earth Engine ID）：`MODIS/006/MOD16A2`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD16A2
* [User's Guide](https://lpdaac.usgs.gov/documents/494/MOD16_User_Guide_V6.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/93/MOD16_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MOD16A2)

## 许可与引用

- 许可：proprietary
- 关键词：8-day, evapotranspiration, global, mod16a2, modis, nasa, water-vapor
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD16A2.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MCD15A3H.006 MODIS Leaf Area Index/FPAR 4-Day Global 500m [deprecated]](/pages/762d4697/)
- [MOD13A1.006 Terra Vegetation Indices 16-Day Global 500m [deprecated]](/pages/7a44de8e/)
- [MOD13A2.006 Terra Vegetation Indices 16-Day Global 1km [deprecated]](/pages/9296243b/)
- [MOD13Q1.006 Terra Vegetation Indices 16-Day Global 250m [deprecated]](/pages/7d865478/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
