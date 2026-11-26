---
title: "NOAA CDR OISST v2：最优插值海表温度 [已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/0c219b07/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "avhrr"
  - "cdr"
  - "daily"
  - "ice"
  - "noaa"
  - "ocean"
  - "oceans"
  - "oisst"
  - "real-time"
  - "sst"
  - "temperature"
---

# NOAA CDR OISST v2：最优插值海表温度 [已弃用]

英文原名：NOAA CDR OISST v2: Optimum Interpolation Sea Surface Temperature [deprecated]

## 这是什么数据

NOAA 1/4 度逐日最优插值海表温度（OISST）提供完整的海洋温度场，通过在规则全球格网上组合来自不同平台（卫星、船舶、浮标）的偏差调整观测构建，空缺由插值填补。来自高级甚高分辨率辐射计（AVHRR）的卫星数据提供主要输入，使从 1981 年末至今的高时空覆盖成为可能。

OISST 数据集将单日数据处理两次。先发布延迟 1 天的近实时初步版本，再发布延迟 14 天的最终版本。最终版本使用额外天数进行平滑与纬向偏差校正，并替换初步版本。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球海洋；时间范围：1981 年至 2020 年；分辨率：27,830 米。
- 时间范围：1981-09-01 至 2020-04-26

## 分辨率与规格

- 空间分辨率：约 27,830 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| sst | 逐日海表温度。 | 27830 |  |
| anom | 温度异常；逐日 OISST 减去 30 年气候平均。 | 27830 |  |
| ice | 逐日海冰浓度的 7 天中位数。 | 27830 |  |
| err | 估计误差；分析海表温度的标准差。 | 27830 |  |

## 能拿来做什么

- 海表温度监测
- 海洋气候研究
- 渔业与海洋生态应用

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NOAA/CDR/OISST/V2');
```

- 数据集编号（Earth Engine ID）：`NOAA/CDR/OISST/V2`
- 提供方：NOAA、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_OISST_V2

## 许可与引用

- 许可：proprietary
- 关键词：avhrr, cdr, daily, ice, noaa, ocean, oceans, oisst, real-time, sst, temperature
- 数据引用：Richard W. Reynolds, Viva F. Banzon, and NOAA CDR Program (2008): NOAA
Optimum Interpolation 1/4 Degree Daily Sea Surface Temperature (OISST)
Analysis, Version 2. [indicate subset used]. NOAA National Centers for
Environmental Information. [doi:10.7289/V5SQ8XB5](https://doi.org/10.7289/V5SQ8XB5)
[access date].

- DOI：10.7289/V5SQ8XB5

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [NOAA CDR OISST v02r01：最优插值海表温度](/pages/47b5c214/)
- [CFSR：气候预报系统再分析（协调版）](/pages/a2388741/)
- [CFSV2：NCEP 气候预报系统版本 2，6 小时产品（协调版）](/pages/a1cd75f1/)
- [Daymet V4：逐日地表天气与气候学汇总](/pages/7b6d050e/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
