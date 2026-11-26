---
title: "再处理 GLDAS-2.0：全球陆地数据同化系统"
date: 2026-11-03 12:00:00
permalink: /pages/e83800ec/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "3-hourly"
  - "climate"
  - "cryosphere"
  - "evaporation"
  - "forcing"
  - "geophysical"
  - "gldas"
  - "humidity"
  - "ldas"
  - "nasa"
  - "precipitation"
  - "pressure"
---

# 再处理 GLDAS-2.0：全球陆地数据同化系统

英文原名：Reprocessed GLDAS-2.0: Global Land Data Assimilation System

## 这是什么数据

NASA 全球陆地数据同化系统版本 2（GLDAS-2）有三个组成部分：GLDAS-2.0、GLDAS-2.1 与 GLDAS-2.2。GLDAS-2.0 完全由普林斯顿气象强迫输入数据强迫，提供从 1948 年到 2014 年时间上一致的序列。GLDAS-2.1 由 2000 年至今的模式与观测数据组合强迫。GLDAS-2.2 产品套件使用数据同化（DA），而 GLDAS-2.0 与 GLDAS-2.1 产品是「开环」的（即无数据同化）。强迫数据的选择以及 DA 观测来源、变量与方案因不同的 GLDAS-2.2 产品而异。GLDAS-2.0 是 GLDAS 版本 2（GLDAS-2）数据集的两个组成部分之一，另一个是 GLDAS-2.1。GLDAS-2.0 使用更新的普林斯顿全球气象强迫数据集（Sheffield 等，2006）与升级的陆地信息系统版本 7（LIS-7）重新处理。它覆盖 1948–2010 年时段，并将随着相应强迫数据的可用而扩展到更近的年份。

模式模拟于 1948 年 1 月 1 日使用该年该日的 LSM 气候学土壤水分与其他状态场初始化。模拟使用 GLDAS 通用数据集：土地覆盖（MCD12Q1：Friedl 等，2010）、陆地水体掩膜（MOD44W：Carroll 等，2009）、土壤质地（Reynolds，1999）与高程（GTOPO30）。当前 GLDAS-2.x 产品使用基于 MODIS 的地表参数，而 GLDAS-1 与先前的 GLDAS-2 产品（2012 年 10 月之前）使用基于 AVHRR 的参数。

提供方注：带扩展名 _tavg 的名称是过去 3 小时平均的变量，带扩展名「_acc」的名称是过去 3 小时累积的变量，带扩展名「_inst」的名称是瞬时变量，带「_f」的名称是强迫变量。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：1948 年至 2014 年；分辨率：27,830 米。
- 时间范围：1948-01-01 至 2014-12-31

## 分辨率与规格

- 空间分辨率：约 27,830 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Albedo_inst | 反照率。 | 27830 |  |
| AvgSurfT_inst | 平均地表皮肤温度。 | 27830 |  |
| CanopInt_inst | 植物冠层表面水。 | 27830 |  |
| ECanop_tavg | 冠层水蒸发。 | 27830 |  |
| ESoil_tavg | 裸土直接蒸发。 | 27830 |  |
| Evap_tavg | 蒸散。 | 27830 |  |
| LWdown_f_tavg | 下行长波辐射通量。 | 27830 |  |
| Lwnet_tavg | 净长波辐射通量。 | 27830 |  |
| PotEvap_tavg | 潜在蒸发率。 | 27830 |  |
| Psurf_f_inst | 气压。 | 27830 |  |
| Qair_f_inst | 比湿。 | 27830 |  |
| Qg_tavg | 热通量。 | 27830 |  |
| Qh_tavg | 感热净通量。 | 27830 |  |
| Qle_tavg | 潜热净通量。 | 27830 |  |
| Qs_acc | 暴雨地表径流。 | 27830 |  |
| Qsb_acc | 基流-地下水径流。 | 27830 |  |
| Qsm_acc | 融雪。 | 27830 |  |
| Rainf_f_tavg | 总降水率。 | 27830 |  |
| Rainf_tavg | 降雨率。 | 27830 |  |
| RootMoist_inst | 根区土壤水分。 | 27830 |  |
| SWE_inst | 雪深水当量。 | 27830 |  |
| SWdown_f_tavg | 下行短波辐射通量。 | 27830 |  |
| SnowDepth_inst | 雪深。 | 27830 |  |
| Snowf_tavg | 降雪率。 | 27830 |  |
| SoilMoi0_10cm_inst | 土壤水分（0–10 厘米）。 | 27830 |  |
| SoilMoi10_40cm_inst | 土壤水分（10–40 厘米）。 | 27830 |  |
| SoilMoi40_100cm_inst | 土壤水分（40–100 厘米）。 | 27830 |  |
| SoilMoi100_200cm_inst | 土壤水分（100–200 厘米）。 | 27830 |  |
| SoilTMP0_10cm_inst | 土壤温度（0–10 厘米）。 | 27830 |  |
| SoilTMP10_40cm_inst | 土壤温度（10–40 厘米）。 | 27830 |  |
| SoilTMP40_100cm_inst | 土壤温度（40–100 厘米）。 | 27830 |  |
| SoilTMP100_200cm_inst | 土壤温度（100–200 厘米）。 | 27830 |  |
| Swnet_tavg | 净短波辐射通量。 | 27830 |  |
| Tair_f_inst | 气温。 | 27830 |  |
| Tveg_tavg | 蒸腾。 | 27830 |  |
| Wind_f_inst | 风速。 | 27830 |  |

## 能拿来做什么

- 陆面水文与干旱监测
- 气候研究
- 农业与粮食安全评估

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/GLDAS/V20/NOAH/G025/T3H');
```

- 数据集编号（Earth Engine ID）：`NASA/GLDAS/V20/NOAH/G025/T3H`
- 提供方：NASA GES DISC at NASA Goddard Space Flight Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GLDAS_V20_NOAH_G025_T3H
* [Readme](https://hydro1.gesdisc.eosdis.nasa.gov/data/GLDAS/GLDAS_NOAH025_3H.2.0/doc/README_GLDAS2.pdf)
* [How-to](https://disc.gsfc.nasa.gov/information/howto?tags=hydrology)
* [GES DISC Hydrology Documentation](https://disc.gsfc.nasa.gov/information/documents?title=Hydrology%20Documentation)

## 许可与引用

- 许可：proprietary
- 关键词：3-hourly, climate, cryosphere, evaporation, forcing, geophysical, gldas, humidity, ldas, nasa, precipitation, pressure, radiation, soil, soil-moisture, surface, temperature, water-vapor, weather-and-climate, wind
- 数据引用：Rodell, M., P.R. Houser, U. Jambor, J. Gottschalck, K. Mitchell,
C.-J. Meng, K. Arsenault, B. Cosgrove, J. Radakovich, M. Bosilovich,
J.K. Entin, J.P. Walker, D. Lohmann, and D. Toll, The Global Land Data
Assimilation System, Bull. Amer. Meteor. Soc., 85(3), 381-394, 2004.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GLDAS-2.1: Global Land Data Assimilation System](/pages/e49884e5/)
- [GLDAS-2.2: Global Land Data Assimilation System](/pages/9e033fa6/)
- [ECMWF 近实时 IFS 大气预报](/pages/3fdfa56d/)
- [ERA5-Land 按日内时刻月平均数据 — ECMWF 气候再分析](/pages/39c04517/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
