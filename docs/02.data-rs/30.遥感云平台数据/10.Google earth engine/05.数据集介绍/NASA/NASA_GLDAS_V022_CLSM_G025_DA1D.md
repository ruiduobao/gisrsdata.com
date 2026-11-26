---
title: "GLDAS-2.2：全球陆地数据同化系统"
date: 2026-11-03 12:00:00
permalink: /pages/9e033fa6/
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

# GLDAS-2.2：全球陆地数据同化系统

英文原名：GLDAS-2.2: Global Land Data Assimilation System

## 这是什么数据

NASA 全球陆地数据同化系统版本 2（GLDAS-2）有三个组成部分：GLDAS-2.0、GLDAS-2.1 与 GLDAS-2.2。GLDAS-2.0 完全由普林斯顿气象强迫输入数据强迫，提供从 1948 年到 2014 年时间上一致的序列。GLDAS-2.1 由 2000 年至今的模式与观测数据组合强迫。GLDAS-2.2 产品套件使用数据同化（DA），而 GLDAS-2.0 与 GLDAS-2.1 产品是「开环」的（即无数据同化）。强迫数据的选择以及 DA 观测来源、变量与方案因不同的 GLDAS-2.2 产品而异。GLDAS-2.2 是 GES DISC 档案的新成员，目前包括一个来自 CLSM-F2.5 的主产品，带有重力恢复与气候实验的数据同化（GRACE-DA），从 2003 年 2 月至今。GLDAS-2.2 数据以两个生产流提供：主与 Early，仅摄入主产品。

GLDAS-2.2 GRACE-DA 产品使用陆地信息系统（LIS）版本 7 中的 Catchment-F2.5 模拟。本数据产品包含从 2003 年 2 月 1 日至今的 24 个陆面场。

模拟于 2003 年 2 月 1 日使用 GLDAS-2.0 每日 Catchment 模式模拟的条件启动，由业务欧洲中期天气预报中心（ECMWF）综合预报系统的大气分析场强迫。来自 GRACE 卫星的总陆地水异常观测被同化（Li 等，2019）。由于与 ECMWF 的数据协议，本 GLDAS-2.2 日产品不包括气象强迫场。

提供方注：带扩展名 _tavg 的名称是过去 3 小时平均的变量，带扩展名「_acc」的名称是过去 3 小时累积的变量，带扩展名「_inst」的名称是瞬时变量，带「_f」的名称是强迫变量。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2003 年至 2026 年；分辨率：27,830 米。
- 时间范围：2003-01-01 至 2026-08-31

## 分辨率与规格

- 空间分辨率：约 27,830 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| ACond_tavg | 空气动力学导度。 | 27830 |  |
| AvgSurfT_tavg | 平均地表皮肤温度。 | 27830 |  |
| CanopInt_tavg | 植物冠层表面水。 | 27830 |  |
| ECanop_tavg | 冠层水蒸发。 | 27830 |  |
| ESoil_tavg | 裸土直接蒸发。 | 27830 |  |
| EvapSnow_tavg | 雪蒸发。 | 27830 |  |
| Evap_tavg | 蒸散。 | 27830 |  |
| GWS_tavg | 地下水储量。 | 27830 |  |
| Lwnet_tavg | 净长波辐射通量。 | 27830 |  |
| Qg_tavg | 热通量。 | 27830 |  |
| Qh_tavg | 感热净通量。 | 27830 |  |
| Qle_tavg | 潜热净通量。 | 27830 |  |
| Qsb_tavg | 基流-地下水径流。 | 27830 |  |
| Qsm_tavg | 融雪。 | 27830 |  |
| Qs_tavg | 暴雨地表径流。 | 27830 |  |
| SnowDepth_tavg | 雪深。 | 27830 |  |
| SnowT_tavg | 雪面温度。 | 27830 |  |
| SoilMoist_P_tavg | 剖面土壤水分。 | 27830 |  |
| SoilMoist_RZ_tavg | 根区土壤水分。 | 27830 |  |
| SoilMoist_S_tavg | 表层土壤水分。 | 27830 |  |
| SWE_tavg | 雪深水当量。 | 27830 |  |
| Swnet_tavg | 净短波辐射通量。 | 27830 |  |
| TVeg_tavg | 蒸腾。 | 27830 |  |
| TWS_tavg | 陆地水储量。 | 27830 |  |

## 能拿来做什么

- 陆面水文与干旱监测
- 气候研究
- 农业与粮食安全评估

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/GLDAS/V022/CLSM/G025/DA1D');
```

- 数据集编号（Earth Engine ID）：`NASA/GLDAS/V022/CLSM/G025/DA1D`
- 提供方：NASA GES DISC at NASA Goddard Earth Sciences Data and Information Services Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GLDAS_V022_CLSM_G025_DA1D
* [Readme](https://hydro1.gesdisc.eosdis.nasa.gov/data/GLDAS/GLDAS_CLSM025_DA1_D.2.2/doc/README_GLDAS2.pdf)
* [How-to](https://disc.gsfc.nasa.gov/information/howto?tags=hydrology)
* [GES DISC Hydrology Documentation](https://disc.gsfc.nasa.gov/information/documents?title=Hydrology%20Documentation)

## 许可与引用

- 许可：proprietary
- 关键词：3-hourly, climate, cryosphere, evaporation, forcing, geophysical, gldas, humidity, ldas, nasa, precipitation, pressure, radiation, soil, soil-moisture, surface, temperature, water-vapor, weather-and-climate, wind
- 数据引用：Li, B., M. Rodell, S. Kumar, H. Beaudoing, A. Getirana, B. F. Zaitchik, et
al. (2019) Global GRACE data assimilation for groundwater and drought
monitoring: Advances and challenges. Water Resources Research, 55,
7564-7586.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GLDAS-2.1: Global Land Data Assimilation System](/pages/e49884e5/)
- [Reprocessed GLDAS-2.0: Global Land Data Assimilation System](/pages/e83800ec/)
- [ECMWF 近实时 IFS 大气预报](/pages/3fdfa56d/)
- [ERA5-Land 按日内时刻月平均数据 — ECMWF 气候再分析](/pages/39c04517/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
