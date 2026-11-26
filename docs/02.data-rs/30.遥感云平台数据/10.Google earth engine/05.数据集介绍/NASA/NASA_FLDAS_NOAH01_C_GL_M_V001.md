---
title: "FLDAS：饥荒早期预警系统网络（FEWS NET）陆地数据同化系统"
date: 2026-11-03 12:00:00
permalink: /pages/00ebbade/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "cryosphere"
  - "evapotranspiration"
  - "famine"
  - "fldas"
  - "humidity"
  - "ldas"
  - "monthly"
  - "nasa"
  - "precipitation"
  - "runoff"
  - "snow"
---

# FLDAS：饥荒早期预警系统网络（FEWS NET）陆地数据同化系统

英文原名：FLDAS: Famine Early Warning Systems Network (FEWS NET) Land Data Assimilation System

## 这是什么数据

FLDAS 数据集（McNally 等 2017）旨在协助数据稀疏的发展中国家环境中的粮食安全评估。它包括许多气候相关变量的信息，包括含水量、湿度、蒸散、平均土壤温度、总降水率等。

有多个不同的 FLDAS 数据集；本数据集使用 Noah 版本 3.6.1 地表模型与 CHIRPS-6 小时降雨，后者已使用 [NASA 陆面数据工具包](https://lis.gsfc.nasa.gov/software/ldt) 降尺度，它是陆地信息系统框架（LIS；[https://lis.gsfc.nasa.gov/](https://lis.gsfc.nasa.gov/)）的一部分。需要时间解聚，以便每日降雨输入可用于能量与水平衡计算。

在强迫数据方面，本模拟使用现代时代回顾分析研究与应用版本 2（MERRA-2）数据的新版本与气候危害组红外降水与站点数据（CHIRPS）的组合，CHIRPS 是一个准全球降雨数据集，旨在用于季节性干旱监测与趋势分析（Funk 等，2015）。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：1982 年至 2026 年；分辨率：11,132 米。
- 时间范围：1982-01-01 至 2026-09-01

## 分辨率与规格

- 空间分辨率：约 11,132 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Evap_tavg | 蒸散。 | 11132 |  |
| LWdown_f_tavg | 下行长波辐射通量。 | 11132 |  |
| Lwnet_tavg | 净长波辐射通量。 | 11132 |  |
| Psurf_f_tavg | 地表气压。 | 11132 |  |
| Qair_f_tavg | 比湿。 | 11132 |  |
| Qg_tavg | 土壤热通量。 | 11132 |  |
| Qh_tavg | 感热净通量。 | 11132 |  |
| Qle_tavg | 潜热净通量。 | 11132 |  |
| Qs_tavg | 暴雨地表径流。 | 11132 |  |
| Qsb_tavg | 基流-地下水径流。 | 11132 |  |
| RadT_tavg | 地表辐射温度。 | 11132 |  |
| Rainf_f_tavg | 总降水率。 | 11132 |  |
| SnowCover_inst | 雪盖分数。 | 11132 |  |
| SnowDepth_inst | 雪深。 | 11132 |  |
| Snowf_tavg | 降雪率。 | 11132 |  |
| SoilMoi00_10cm_tavg | 土壤水分（地下 0–10 厘米）。 | 11132 |  |
| SoilMoi10_40cm_tavg | 土壤水分（地下 10–40 厘米）。 | 11132 |  |
| SoilMoi100_200cm_tavg | 土壤水分（地下 100–200 厘米）。 | 11132 |  |
| SoilMoi40_100cm_tavg | 土壤水分（地下 40–100 厘米）。 | 11132 |  |
| SoilTemp00_10cm_tavg | 土壤温度（地下 0–10 厘米）。 | 11132 |  |
| SoilTemp10_40cm_tavg | 土壤温度（地下 10–40 厘米）。 | 11132 |  |
| SoilTemp100_200cm_tavg | 土壤温度（地下 100–200 厘米）。 | 11132 |  |
| SoilTemp40_100cm_tavg | 土壤温度（地下 40–100 厘米）。 | 11132 |  |
| SWdown_f_tavg | 地表下行短波辐射。 | 11132 |  |
| SWE_inst | 雪水当量。 | 11132 |  |
| Swnet_tavg | 净短波辐射通量。 | 11132 |  |
| Tair_f_tavg | 近地表气温。 | 11132 |  |
| Wind_f_tavg | 近地表风速。 | 11132 |  |

## 能拿来做什么

- 陆面水文与干旱监测
- 气候研究
- 农业与粮食安全评估

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/FLDAS/NOAH01/C/GL/M/V001');
```

- 数据集编号（Earth Engine ID）：`NASA/FLDAS/NOAH01/C/GL/M/V001`
- 提供方：NASA GES DISC at NASA Goddard Space Flight Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_FLDAS_NOAH01_C_GL_M_V001
* [Readme](https://hydro1.gesdisc.eosdis.nasa.gov/data/FLDAS/FLDAS_NOAH01_C_GL_M.001/doc/README_FLDAS.pdf)
* [How-to](https://disc.gsfc.nasa.gov/information/howto?tags=hydrology)
* [GES DISC Hydrology Documentation](https://disc.gsfc.nasa.gov/information/documents?title=Hydrology%20Documentation)

## 许可与引用

- 许可：proprietary
- 关键词：climate, cryosphere, evapotranspiration, famine, fldas, humidity, ldas, monthly, nasa, precipitation, runoff, snow, soil, soil-moisture, soil-temperature, temperature, water-vapor, weather-and-climate, wind
- 数据引用：If you use these data in your research or applications, please include a
reference in your publication(s) similar to the following example:
Amy McNally NASA/GSFC/HSL (2018), FLDAS Noah Land Surface Model L4 Global
Monthly 0.1 x 0.1 degree (MERRA-2 and CHIRPS), Greenbelt, MD, USA, Goddard
Earth Sciences Data and Information Services Center (GES DISC), Accessed:
[Data Access Date], [doi:10.5067/5NHC22T9375G](https://doi.org/10.5067/5NHC22T9375G)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ECMWF 近实时 IFS 大气预报](/pages/3fdfa56d/)
- [ERA5-Land 按日内时刻月平均数据 — ECMWF 气候再分析](/pages/39c04517/)
- [ERA5-Land 月聚合数据 — ECMWF 气候再分析](/pages/0889ecdc/)
- [ERA5-Land 逐小时数据 — ECMWF 气候再分析](/pages/0a0b8372/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
