---
title: "全球海洋波浪静态水深"
date: 2026-11-03 12:00:00
permalink: /pages/5f5a2e68/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "bathymetry"
  - "copernicus"
  - "oceans"
---

# 全球海洋波浪静态水深

英文原名：Global Ocean Waves Static Bathymetry

## 这是什么数据

全球海洋波浪分析与预报系统的静态水深。本数据集提供以米为单位的海床深度。

法国气象局的全球波浪系统基于波浪模式 MFWAM——第三代波浪模式，使用计算代码 ECWAM-IFS-38R2，耗散项由 Ardhuin 等（2010）开发。模式于 2014 年 11 月借助欧洲研究项目「My Wave」的成果（Janssen 等，2014）升级。

模式平均水深由 2 分格网全球地形数据 ETOPO2/NOAA 生成。模式原生网格不规则：纬向间距在两极附近减小，赤道处大致固定为 1/10 度。业务运行的 MFWAM 由 IFS-ECMWF 大气系统的 6 小时分析风和 3 小时预报风驱动。波谱离散为 24 个方向、30 个频率（0.035–0.58 Hz）。模式以 6 小时步长同化高度计数据，每日提供 4 次分析，并在 0:00 UTC 给出 10 天预报；涌浪谱用分量法拆成主涌浪和次涌浪。

本产品编号 GLOBAL_ANALYSISFORECAST_WAV_001_027，由 Mercator Ocean International 实施：聚合分析加 10 天预报，每日更新两次，包含总谱和分量波（风浪、主涌浪、次涌浪）的有效波高、周期、波向、斯托克斯漂流等积分波浪参数。

## 覆盖范围与时间

- 覆盖范围：全球海洋
- 时间范围：2022-06-01 至 2001-09-01

## 分辨率与规格

- 空间分辨率：约 9,276.62 米（约 9.28 公里（1/12 度））
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| deptho | 海床深度 | 9276.62 |  |

## 能拿来做什么

- 全球波浪预报背后的模式水深图层
- 波浪模式网格上的参考海床深度
- 波浪建模配置的一致性核对

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('COPERNICUS/MARINE/WAV/ANFC_0_083DEG_STATIC');
```

- 数据集编号（Earth Engine ID）：`COPERNICUS/MARINE/WAV/ANFC_0_083DEG_STATIC`
- 提供方：Copernicus Marine Service Global Ocean Waves and Forecasts、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_WAV_ANFC_0_083DEG_STATIC

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：bathymetry, copernicus, oceans
- 数据引用：E.U. Copernicus Marine Service Information (2024). Global Ocean Waves Analysis and Forecast.
[doi.org/10.48670/moi-00017](https://doi.org/10.48670/moi-00017)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [全球海洋水色光学产品（多源，4 公里，月度）](/pages/b4a5e847/)
- [全球海洋水色初级生产产品（多源，4 公里）](/pages/6396836c/)
- [全球海洋水色反射率产品（OLCI，300 米）](/pages/f4ffb7b4/)
- [全球海洋水色反射率产品（多源，4 公里）](/pages/472dc170/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
