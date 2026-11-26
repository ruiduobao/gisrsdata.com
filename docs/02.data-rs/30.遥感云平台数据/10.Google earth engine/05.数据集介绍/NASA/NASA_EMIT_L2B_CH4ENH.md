---
title: "地球表面矿物尘源调查-甲烷增强"
date: 2026-11-03 12:00:00
permalink: /pages/88d470ff/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "atmosphere"
  - "daily"
  - "emit"
  - "methane"
  - "nasa"
---

# 地球表面矿物尘源调查-甲烷增强

英文原名：Earth Surface Mineral Dust Source Investigation- Methane Enhancement

## 这是什么数据

EMIT 项目是地球风险仪器（EV-I）计划的一部分，由 NASA 地球科学部（ESD）项目主任指导。EMIT 由一个适配安装在国际空间站（ISS）上的 VSWIR 红外 Dyson 成像光谱仪组成。EMIT 测量 380 至 2,500 纳米之间的辐射，带宽约 7 纳米。数据在赤道约 75 公里宽的条带中收集，地面采样距离约 60 米。更多细节见提供方的 [NASA EMIT 概述](https://lpdaac.usgs.gov/documents/1695/EMIT_L2B_GHG_User_Guide_V1.pdf)。

EMIT 是绘制包括甲烷、二氧化碳与水汽在内的温室气体的特别有用的工具。这与先前机载数据的发现一致，但 EMIT 的全球性、重访频率与宽条带为研究温室气体反演提供了前所未有的机会。

EMIT 二级 B 甲烷增强数据（EMITL2BCH4ENH）版本 1 数据产品是基于自适应匹配滤波方法的甲烷总垂直柱增强估计，单位为百万分之一米（ppm m）。EMITL2BCH4ENH 提供用于识别甲烷羽流复合体的逐像元甲烷增强数据。EMITL2BCH4ENH 数据产品的初始发布将只包括已识别出甲烷羽流复合体的颗粒。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2022 年至 2024 年；分辨率：72,000 米。
- 时间范围：2022-08-10 至 2024-11-30

## 分辨率与规格

- 空间分辨率：约 72,000 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| vertical_column_enhancement | 甲烷总垂直柱增强估计。 | 72000 |  |

## 能拿来做什么

- 温室气体（甲烷）探测
- 高光谱遥感研究
- 矿物尘源调查

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/EMIT/L2B/CH4ENH');
```

- 数据集编号（Earth Engine ID）：`NASA/EMIT/L2B/CH4ENH`
- 提供方：NASA Jet Propulsion Laboratory、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_EMIT_L2B_CH4ENH

## 许可与引用

- 许可：proprietary
- 关键词：atmosphere, daily, emit, methane, nasa
- 数据引用：Green, R., Thorpe, A., Brodrick, P., Chadwick, D., Elder, C.,
Villanueva-Weeks, C., Fahlen, J., Coleman, R., Jensen, D., Olsen-Duvall, W.,
Lundeen, S., Lopez, A., Thompson, D. (2023). EMIT L2B Methane Enhancement
Data 60 m V001 [Data set]. NASA EOSDIS Land Processes Distributed Active
Archive Center. Accessed 2024-02-26 from
[https://doi.org/10.5067/EMIT/EMITL2BCH4ENH.001](https://doi.org/10.5067/EMIT/EMITL2BCH4ENH.001)

- DOI：10.5067/EMIT/EMITL2BCH4ENH.001

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [Earth Surface Mineral Dust Source Investigation- Methane Plume Complexes](/pages/bf7e283f/)
- [ERA5 逐小时数据 — ECMWF 气候再分析](/pages/2de85afd/)
- [ERA5 逐小时气压层数据 — ECMWF 气候再分析](/pages/e4d910e9/)
- [Google 街景空气质量：加利福尼亚州高分辨率空气污染制图](/pages/4a20302d/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
