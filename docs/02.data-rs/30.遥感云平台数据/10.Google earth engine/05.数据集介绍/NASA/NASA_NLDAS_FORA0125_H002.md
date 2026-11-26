---
title: "NLDAS-2：北美陆地数据同化系统强迫场"
date: 2026-11-03 12:00:00
permalink: /pages/4a88073a/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "evaporation"
  - "forcing"
  - "geophysical"
  - "hourly"
  - "humidity"
  - "ldas"
  - "nasa"
  - "nldas"
  - "precipitation"
  - "pressure"
  - "radiation"
---

# NLDAS-2：北美陆地数据同化系统强迫场

英文原名：NLDAS-2: North American Land Data Assimilation System Forcing Fields

## 这是什么数据

陆地数据同化系统（LDAS）结合多个观测来源（如降水雨量计数据、卫星数据与雷达降水测量），生成地球表面或附近气候特性的估计。

本数据集是北美陆地数据同化系统第 2 阶段（NLDAS-2）的主要（默认）强迫文件（文件 A）。数据为 1/8 度格网间距；时间分辨率为小时。

NLDAS 是多个机构的合作项目：NOAA/NCEP 环境建模中心（EMC）、NASA 戈达德航天飞行中心（GSFC）、普林斯顿大学、华盛顿大学、NOAA/NWS 水文发展办公室（OHD）与 NOAA/NCEP 气候预测中心（CPC）。NLDAS 是核心项目，得到 NOAA 美洲气候预测计划（CPPA）的支持。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：北美；时间范围：1979 年至 2026 年；分辨率：13,915 米。
- 时间范围：1979-01-01 至 2026-10-30

## 分辨率与规格

- 空间分辨率：约 13,915 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| temperature | 地表以上 2 米气温。 | 13915 |  |
| specific_humidity | 地表以上 2 米比湿。 | 13915 |  |
| pressure | 地表气压。 | 13915 |  |
| wind_u | 地表以上 10 米 U 风分量。 | 13915 |  |
| wind_v | 地表以上 10 米 V 风分量。 | 13915 |  |
| longwave_radiation | 地表向下长波辐射。 | 13915 |  |
| convective_fraction | 总降水中的对流分数：来自 NARR。 | 13915 |  |
| potential_energy | 对流可用势能（J/kg）：来自 NARR。 | 13915 |  |
| potential_evaporation | 潜在蒸发：来自 NARR。 | 13915 |  |
| total_precipitation | 小时总降水。 | 13915 |  |
| shortwave_radiation | 地表向下短波辐射 - 偏差校正。 | 13915 |  |

## 能拿来做什么

- 陆面建模强迫
- 水文与气候研究
- 北美天气分析

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/NLDAS/FORA0125_H002');
```

- 数据集编号（Earth Engine ID）：`NASA/NLDAS/FORA0125_H002`
- 提供方：NASA GES DISC at NASA Goddard Space Flight Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_NLDAS_FORA0125_H002
* [Readme](https://hydro1.gesdisc.eosdis.nasa.gov/data/NLDAS/README.NLDAS2.pdf)
* [How-To](https://disc.gsfc.nasa.gov/information/howto?tags=hydrology)
* [GES DISC Hydrology Documentation](https://disc.gsfc.nasa.gov/information/documents?title=Hydrology%20Documentation)
* [GES DISC Data Rods Documentation](https://disc.gsfc.nasa.gov/information/tools?title=Hydrology%20Data%20Rods)

## 许可与引用

- 许可：proprietary
- 关键词：climate, evaporation, forcing, geophysical, hourly, humidity, ldas, nasa, nldas, precipitation, pressure, radiation, soil, temperature, water-vapor, weather-and-climate, wind
- 数据引用：The data set source should be properly cited when the data are
used. A formal reference of the form: \\<authors\\>, 2012, last updated
2013: \\<dataset name\\>. NASA/GSFC, Greenbelt, MD, USA, NASA Goddard
Earth Sciences Data and Information Services Center (GES DISC).
Accessed \\<enter user data access date\\> at \\<DOI\\> is suggested following
Parsons et al. (2010), [doi:10.1029/2010EO340001](https://doi.org/10.1029/2010EO340001).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [SoilGrids250m 2.0 土壤体积含水量](/pages/ec88a629/)
- [iSDAsoil USDA 质地类别](/pages/662f5c13/)
- [iSDAsoil pH](/pages/2442f2c8/)
- [iSDAsoil 可提取硫](/pages/398ed96e/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
