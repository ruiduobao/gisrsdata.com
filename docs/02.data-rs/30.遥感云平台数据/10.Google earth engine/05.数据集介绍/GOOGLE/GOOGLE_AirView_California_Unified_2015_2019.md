---
title: "Google 街景空气质量：加利福尼亚州高分辨率空气污染制图"
date: 2026-11-03 12:00:00
permalink: /pages/4a20302d/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "air-quality"
  - "atmosphere"
  - "nitrogen-dioxide"
  - "pollution"
  - "table"
---

# Google 街景空气质量：加利福尼亚州高分辨率空气污染制图

英文原名：Google Street View Air Quality: High Resolution Air Pollution Mapping in California

## 这是什么数据

这个大型矢量数据集包含 2015 年 6 月至 2019 年 6 月加利福尼亚州 NO、NO2、O3、CH4、CO2、BC、PN2.5 和 UFP 浓度的高分辨率空气污染制图。

该数据集由四辆配备 Aclima 移动测量与数据集成平台的 Google 街景车在 2015-05-28 至 2019-06-07 期间收集的测量组成。并非四辆车在整个时段都在积极制图。注意，当某辆车因运营、机械或系统困难而未制图时，数据中可能存在空缺。

四辆车各自的运行日期：

* A 车：2016-05-03 - 2019-04-30 * B 车：2016-05-03 - 2018-06-08 * C 车：2015-05-28 - 2019-06-07 * D 车：2015-06-24 - 2018-11-05

数据在加利福尼亚州的几个地理区域收集，包括旧金山湾区、洛杉矶和圣华金河谷北部。制图在这些区域内选定的社区或城市进行。该数据集包含一张名为「California_Unified_2015_2019」的表，由四辆配备快速时间响应、实验室级仪器的 Google 街景车测量的污染物浓度组成：臭氧（O3）、二氧化氮（NO2）、一氧化氮（NO）、甲烷（CH4）、二氧化碳（CO2）、黑碳（BC）、粒径小于 2.5 微米的颗粒物数（PN2.5）和超细颗粒物（UFP）。数据于 20150528 至 20190607 期间以 1 Hz 时间分辨率收集，覆盖加利福尼亚州三个区域——旧金山湾区、洛杉矶和圣华金河谷北部——的道路。每个区域实际制图的范围因期望的空间数据覆盖和科学问题而异。每个数据点都带有经纬度地理定位以及车辆的标识和速度。

包括方法、标准、数据提供方、元数据字段定义与说明在内的细节，见[元数据](https://docs.google.com/document/d/1If15JccoJcN01Jg3ljN3V-qUFS0HywKAd4OsQ-_JXJo/view)。

## 覆盖范围与时间

- 覆盖范围：美国加利福尼亚州
- 时间范围：2015-05-28 至 2019-06-07

## 分辨率与规格

- 数据类型：矢量/表格（FeatureCollection），在 Google Earth Engine 中调用

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| BC | DOUBLE | 黑碳浓度 |
| CH4 | DOUBLE | 甲烷干空气混合比 |
| CO2 | DOUBLE | 二氧化碳混合比 |
| Car_Identifier | STRING | 四辆车的唯一标识符（Car_A/B/C/D） |
| Car_Speed | DOUBLE | 车辆速度 |
| Date_Time | STRING | UTC 时间，格式 YYYY-MM-DD hh:mm:ss |
| Metadata_Link | STRING | 文档链接 |
| NO | DOUBLE | 一氧化氮混合比 |
| NO2 | DOUBLE | 二氧化氮混合比 |
| NO2_Overrange | STRING | 布尔标志，指示测量值高于仪器规格的工作范围。该字段可为空。 |
| NO_Overrange | STRING | 布尔标志，指示测量值高于仪器规格的工作范围。该字段可为空。 |
| O3 | DOUBLE | 臭氧混合比 |
| PN1 | DOUBLE | 0.3 至 0.5 μm 之间的颗粒物数浓度 |
| PN2 | DOUBLE | 0.5 至 0.7 μm 之间的颗粒物数浓度 |
| PN3 | DOUBLE | 0.7 至 1.0 μm 之间的颗粒物数浓度 |
| PN4 | DOUBLE | 1.0 至 1.5 μm 之间的颗粒物数浓度 |
| PN5 | DOUBLE | 1.5 至 2.5 μm 之间的颗粒物数浓度 |
| PN_Overrange | STRING | 布尔标志，指示测量值高于仪器规格的工作范围。该字段可为空。 |
| UFP | DOUBLE | 大于 3 nm 的总颗粒物数浓度 |
| UFP_Overrange | STRING | 布尔标志，指示测量值高于仪器规格的工作范围。该字段可为空。 |

## 能拿来做什么

- 街道级空气污染制图
- 污染暴露与环境公平分析
- 移动监测方法验证

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.FeatureCollection('GOOGLE/AirView/California_Unified_2015_2019');
```

- 数据集编号（Earth Engine ID）：`GOOGLE/AirView/California_Unified_2015_2019`
- 提供方：Google / Aclima、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_AirView_California_Unified_2015_2019

## 许可与引用

- 许可：CC-BY-NC-4.0
- 关键词：air-quality, atmosphere, nitrogen-dioxide, pollution, table
- 数据引用：Attribution: Every instance where the data is used must include a notice
with the text "Air Quality Data from Google and Aclima"

Citation for publications: Google and Aclima 2019: Project Air View California 2015-2019


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ERA5 逐小时数据 — ECMWF 气候再分析](/pages/2de85afd/)
- [ERA5 逐小时气压层数据 — ECMWF 气候再分析](/pages/e4d910e9/)
- [MethaneAIR L3 甲烷浓度 v1](/pages/7172790c/)
- [MethaneAIR L4 点源 v1](/pages/32e81487/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
