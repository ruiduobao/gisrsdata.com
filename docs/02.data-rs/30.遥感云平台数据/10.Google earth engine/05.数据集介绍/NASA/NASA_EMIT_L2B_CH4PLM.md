---
title: "地球表面矿物尘源调查-甲烷羽流复合体"
date: 2026-11-03 12:00:00
permalink: /pages/bf7e283f/
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

# 地球表面矿物尘源调查-甲烷羽流复合体

英文原名：Earth Surface Mineral Dust Source Investigation- Methane Plume Complexes

## 这是什么数据

EMIT 项目是地球风险仪器（EV-I）计划的一部分，由 NASA 地球科学部（ESD）项目主任指导。EMIT 由一个适配安装在国际空间站（ISS）上的 VSWIR 红外 Dyson 成像光谱仪组成。EMIT 测量 380 至 2,500 纳米之间的辐射，带宽约 7 纳米。数据在赤道约 75 公里宽的条带中收集，地面采样距离约 60 米。更多细节见提供方的 [NASA EMIT 概述](https://lpdaac.usgs.gov/documents/1695/EMIT_L2B_GHG_User_Guide_V1.pdf)。

EMIT 是绘制包括甲烷、二氧化碳与水汽在内的温室气体的特别有用的工具。这与先前机载数据的发现一致，但 EMIT 的全球性、重访频率与宽条带为研究温室气体反演提供了前所未有的机会。

EMIT 二级 B 估计甲烷羽流复合体（EMITL2BCH4PLM）版本 1 数据产品提供估计的甲烷羽流复合体，单位为百万分之一米（ppm m），以及不确定性数据。EMITL2BCH4PLM 数据产品将仅在已识别出甲烷羽流复合体处生成。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2022 年至 2024 年；分辨率：72,000 米。
- 时间范围：2022-08-10 至 2024-10-26

## 分辨率与规格

- 空间分辨率：约 72,000 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| methane_plume_complex | 估计的甲烷羽流复合体。 | 72000 |  |

## 能拿来做什么

- 温室气体（甲烷）探测
- 高光谱遥感研究
- 矿物尘源调查

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/EMIT/L2B/CH4PLM');
```

- 数据集编号（Earth Engine ID）：`NASA/EMIT/L2B/CH4PLM`
- 提供方：NASA Jet Propulsion Laboratory、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_EMIT_L2B_CH4PLM

## 许可与引用

- 许可：proprietary
- 关键词：atmosphere, daily, emit, methane, nasa
- 数据引用：Green, R., Thorpe, A., Brodrick, P., Chadwick, D., Elder, C.,
Villanueva-Weeks, C., Fahlen, J., Coleman, R., Jensen, D., Olsen-Duvall, W.,
Lundeen, S., Lopez, A., Thompson, D. (2023). EMIT L2B Estimated Methane
Plume Complexes 60 m V001 [Data set]. NASA EOSDIS Land Processes Distributed
Active Archive Center. Accessed 2024-03-06 from
[https://doi.org/10.5067/EMIT/EMITL2BCH4PLM.001](https://doi.org/10.5067/EMIT/EMITL2BCH4PLM.001)

- DOI：10.5067/EMIT/EMITL2BCH4PLM.001

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [Earth Surface Mineral Dust Source Investigation- Methane Enhancement](/pages/88d470ff/)
- [ERA5 逐小时数据 — ECMWF 气候再分析](/pages/2de85afd/)
- [ERA5 逐小时气压层数据 — ECMWF 气候再分析](/pages/e4d910e9/)
- [Google 街景空气质量：加利福尼亚州高分辨率空气污染制图](/pages/4a20302d/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
