---
title: "OPERA Sentinel-1 辐射地形校正 SAR 后向散射 V1.0"
date: 2026-11-03 12:00:00
permalink: /pages/8c150ee4/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "backscatter"
  - "jpl"
  - "nasa"
  - "opera"
  - "polarization"
  - "radar"
  - "sar"
  - "satellite-imagery"
  - "sentinel1-derived"
---

# OPERA Sentinel-1 辐射地形校正 SAR 后向散射 V1.0

英文原名：OPERA Radiometric Terrain-Corrected SAR Backscatter from Sentinel-1 V1.0

## 这是什么数据

本产品由经地形归一化的雷达后向散射组成。它制图与地面散射体物理性质相关的信号，如地表粗糙度、土壤湿度与/或植被。OPERA RTC-S1 产品源自哥白尼 Sentinel-1 干涉宽幅（IW）单视复数（SLC）数据，范围近全球，时间采样与 SLC 数据的可用性一致。

每个 OPERA RTC-S1 产品对应投影到预定义 UTM/极地立体地图投影格网（像元间距 30 米）的单个 S1 段。哥白尼全球 30 米（GLO-30）数字高程模型（DEM）是用于校正地形影响并对产品地理编码的参考 DEM。OPERA RTC-S1 产品通过辐射地形校正，将原始雷达亮度 beta0 归一化为后向散射系数 gamma0。

由于 S1 任务轨道管狭窄，入射角、局部入射角、视数与 RTC 面积归一化因子（ANF）等雷达几何层在地面每个位置随时间仅略有变化，因此视为静态。这些静态层与 OPERA RTC-S1 产品分开提供，因为它们只生产一次或少数几次，以应对 DEM、S1 轨道或静态层生成算法的变化。静态层见关联的 [OPERA Sentinel-1 辐射地形校正 SAR 后向散射静态层数据集](OPERA_RTC_L2_V1_S1_STATIC)。

## 覆盖范围与时间

- 覆盖范围：空间：近全球；时间：2016 年至今；分辨率：30 米。
- 时间范围：2016-04-14 至 2026-11-02

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| VV | 归一化为 gamma0 的 VV 极化雷达后向散射。 | 30 |  |
| VH | 归一化为 gamma0 的 VH 极化雷达后向散射。 | 30 |  |
| HV | 归一化为 gamma0 的 HV 极化雷达后向散射。 | 30 |  |
| HH | 归一化为 gamma0 的 HH 极化雷达后向散射。 | 30 |  |
| mask | 掩膜层，包含用 RTC-S1 段轨道计算的有效/无效、叠掩与阴影分类，与相关地理编码影像在同一地理格网上提供。 | 30 |  |

## 能拿来做什么

- 做土壤湿度、植被与地表粗糙度的 SAR 分析。
- 为洪水、农作物监测提供地形校正后的后向散射。
- 作为干涉与变化检测的标准化输入。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('OPERA/RTC/L2_V1/S1');
```

- 数据集编号（Earth Engine ID）：`OPERA/RTC/L2_V1/S1`
- 提供方：NASA JPL、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OPERA_RTC_L2_V1_S1

## 许可与引用

- 许可：CC0-1.0
- 关键词：backscatter, jpl, nasa, opera, polarization, radar, sar, satellite-imagery, sentinel1-derived
- 数据引用：NASA/JPL/OPERA. (2023). OPERA Radiometric Terrain Corrected SAR
Backscatter from Sentinel-1 validated product (Version 1) [Data set].
NASA Alaska Satellite Facility Distributed Active Archive Center.
[doi:10.5067/SNWG/OPERA_L2_RTC-S1_V1](https://doi.org/10.5067/SNWG/OPERA_L2_RTC-S1_V1)

- DOI：10.5067/SNWG/OPERA_L2_RTC-S1_V1

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [OPERA Sentinel-1 辐射地形校正 SAR 后向散射静态层 V1.0](/pages/d7f26f8f/)
- [ALOS AVNIR-2 正射影像（ORI）](/pages/d4abf354/)
- [ALOS-2 PALSAR-2 条带模式 2.1 级产品（2024 年 1 月能登地震应急观测）](/pages/b836b19e/)
- [ASTER L1T 辐射亮度影像](/pages/b48e6fb4/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
