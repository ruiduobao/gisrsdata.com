---
title: "SPL3SMP_E.006 SMAP L3 Radiometer Global Daily 9 km Soil Moisture"
date: 2026-11-03 12:00:00
permalink: /pages/bb174530/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "drought"
  - "nasa"
  - "smap"
  - "soil"
  - "soil-moisture"
  - "surface"
  - "weather"
---

# SPL3SMP_E.006 SMAP L3 Radiometer Global Daily 9 km Soil Moisture

## 数据集简介

Data prior from 2023-12-04 are available in the older
[NASA/SMAP/SPL3SMP_E/005](NASA_SMAP_SPL3SMP_E_005) collection.
They will eventually be reprocessed and added to this collection.

This Level-3 (L3) soil moisture product provides a daily composite of global
land surface conditions retrieved by the Soil Moisture Active Passive (SMAP)
L-Band radiometer. The daily data here were collected from the descending
(local solar time of 6 am) and ascending (local solar time of 6 pm) passes.

The SMAP mission is an orbiting observatory that measures the amount of
water in the surface soil everywhere on Earth. A detailed description can be
found in the
[SMAP Handbook](https://smap.jpl.nasa.gov/system/internal_resources/details/original/178_SMAP_Handbook_FINAL_1_JULY_2014_Web.pdf).
It was launched in January 2015 and started operation in April 2015. The
radar instrument, ceasing operation in early 2015 due to failure of radar
power supply, collected close to 3 months of science data. The prime mission
phase of three years was completed in 2018, and since then SMAP has been in
extended operation phase.

SMAP measures soil moisture every 2-3 days. This permits changes around
the world to be observed over time scales ranging from major storms to
repeated measurements of changes over the seasons.

Everywhere on Earth not covered with water or not frozen, SMAP measures how
much water is in the top layer of soil. It also distinguishes between ground
that is frozen or thawed. Where the ground is not frozen, SMAP measures the
amount of water found between the minerals, rocky material, and organic
particles found in soil everywhere in the world (SMAP measures liquid water
in the top layer of ground but is not able to measure the ice.)

SPL3SMP_E data are transformed to
[geographic coordinates using GDAL libraries](https://github.com/google/earthengine-catalog/blob/main/pipelines/smap_convert_l3.py)
before the data are ingested into Google Earth Engine.

See the
[SMAP L3 Soil Moisture User Guide](https://nsidc.org/sites/default/files/spl3smp_e-v005-userguide.pdf)
and references therein for additional documentation and algorithm details.

See
[basic](https://developers.google.com/earth-engine/tutorials/community/smap-soil-moisture)
and
[advanced](https://developers.google.com/earth-engine/tutorials/community/anomalies-analysis-smo-and-pre)
tutorials to learn how to use SMAP data in Earth Engine.

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/SMAP/SPL3SMP_E/006`
- 数据类型：影像集合（ImageCollection）
- 提供方：Google and NSIDC、Google Earth Engine
- 时间范围：2023-12-04 至 2026-10-30
- 空间分辨率：9000 米
- 许可：proprietary
- 关键词：drought, nasa, smap, soil, soil-moisture, surface, weather

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| soil_moisture_am | Retrieved soil moisture estimate from the disaggregated/downscaled vertical polarization brightness temperature at 9-km grid cell; AM overpass  | 9000 |  |
| tb_h_corrected_am | Weighted average of horizontally polarized brightness temperatures. This value represents the corrected land brightness temperature if the water fraction is lower than 0.9 (otherwise no correction is applied) or represents the corrected water brightness temperature if the water fraction is greater than 0.1 (otherwise no correction is applied); AM overpass  | 9000 |  |
| tb_v_corrected_am | Weighted average of vertically polarized brightness temperatures. This value represents the corrected land brightness temperature if the water fraction is lower than 0.9 (otherwise no correction is applied) or represents the corrected water brightness temperature if the water fraction is greater than 0.1 (otherwise no correction is applied); AM overpass  | 9000 |  |
| vegetation_water_content_am | Vegetation water content at 9-km spatial scale. This parameter is used as input ancillary data parameter to the SPL2SMAP processing software when the baseline algorithm is used. The valid minimum and maximum below are subject to further analysis. AM overpass  | 9000 |  |
| retrieval_qual_flag_am | 0 = Pass: Soil moisture  with acceptable quality; 1 = Fail: Soil moisture does  with unacceptable quality; AM overpass  | 9000 |  |
| tb_qual_flag_h_am | 0= brightness temperatures with unacceptable quality; 1= brightness temperatures with acceptable quality; AM overpass  | 9000 |  |
| tb_qual_flag_v_am | 0= brightness temperatures with unacceptable quality; 1= brightness temperatures with acceptable quality; AM overpass  | 9000 |  |
| soil_moisture_pm | Retrieved soil moisture estimate from the disaggregated/downscaled vertical polarization brightness temperature at 9-km grid cell; PM overpass  | 9000 |  |
| tb_h_corrected_pm | Weighted average of horizontally polarized brightness temperatures. This value represents the corrected land brightness temperature if the water fraction is lower than 0.9 (otherwise no correction is applied) or represents the corrected water brightness temperature if the water fraction is greater than 0.1 (otherwise no correction is applied); PM overpass  | 9000 |  |
| tb_v_corrected_pm | Weighted average of vertically polarized brightness temperatures. This value represents the corrected land brightness temperature if the water fraction is lower than 0.9 (otherwise no correction is applied) or represents the corrected water brightness temperature if the water fraction is greater than 0.1 (otherwise no correction is applied); PM overpass  | 9000 |  |
| vegetation_water_content_pm | Vegetation water content at 9-km spatial scale. This parameter is used as input ancillary data parameter to the SPL2SMAP processing software when the baseline algorithm is used. The valid minimum and maximum below are subject to further analysis. PM overpass  | 9000 |  |
| retrieval_qual_flag_pm | 0 = Pass: Soil moisture  with acceptable quality; 1 = Fail: Soil moisture does  with unacceptable quality;  PM overpass  | 9000 |  |
| tb_qual_flag_h_pm | 0= brightness temperatures with unacceptable quality; 1= brightness temperatures with acceptable quality; PM overpass  | 9000 |  |
| tb_qual_flag_v_pm | 0= brightness temperatures with unacceptable quality; 1= brightness temperatures with acceptable quality; PM overpass  | 9000 |  |
| soil_moisture_am_anomaly | Experimental. Difference of the 30-day average of 'soil_moisture_am', centered on asset date, relative to the same 30-day period averaged across years from 2015 to present, excluding asset year.  See [this script](https://github.com/google/earthengine-community/blob/master/datasets/smap_anomaly_l3.py) for anomaly computations.  | 9000 |  |
| soil_moisture_pm_anomaly | Experimental. Difference of the 30-day average of 'soil_moisture_pm', centered on asset date, relative to the same 30-day period averaged across years from 2015 to present, excluding asset year.  See [this script](https://github.com/google/earthengine-community/blob/master/datasets/smap_anomaly_l3.py) for anomaly computations.  | 9000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/SMAP/SPL3SMP_E/006');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_SMAP_SPL3SMP_E_006
- 数据引用：**O'Neill, P. E., S. Chan, E. G. Njoku, T. Jackson, R. Bindlish,
J. Chaubell, and A. Colliander. 2021. SMAP Enhanced L3 Radiometer Global
and Polar Grid Daily 9 km EASE-Grid Soil Moisture, Version 5.
[Indicate subset used]. Boulder, Colorado USA. NASA National Snow and Ice
Data Center Distributed Active Archive Center.
[doi:10.5067/4DQ54OUIJ9DL](https://doi.org/10.5067/4DQ54OUIJ9DL)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
