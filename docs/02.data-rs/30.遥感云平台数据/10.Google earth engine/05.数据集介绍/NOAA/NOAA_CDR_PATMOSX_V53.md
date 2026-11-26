---
title: "NOAA CDR PATMOSX：云特性、反射率与亮温，版本 5.3"
date: 2026-11-03 12:00:00
permalink: /pages/2e70bee4/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "atmospheric"
  - "avhrr"
  - "brightness"
  - "cdr"
  - "climate"
  - "cloud"
  - "metop"
  - "noaa"
  - "optical"
  - "poes"
  - "reflectance"
  - "temperature"
---

# NOAA CDR PATMOSX：云特性、反射率与亮温，版本 5.3

英文原名：NOAA CDR PATMOSX: Cloud Properties, Reflectance, and Brightness Temperatures, Version 5.3

## 这是什么数据

本数据集提供多个云特性的高质量气候数据记录（CDR），以及高级甚高分辨率辐射计（AVHRR）探路者大气扩展（PATMOS-x）亮温与反射率。这些数据已拟合到 0.1 x 0.1 等角格网，上升与下降资产均逐日从每天二至十次 NOAA 与 MetOp 卫星过境生成。

本数据集包括 48 个波段，其中 11 个被认为 CDR 质量（在波段列表中标为「CDR variable」）。云产品使用 ABI（高级基线成像仪）云高算法（ACHA）与白天云光学特性（DCOMP）算法导出。处理细节见[气候算法理论基础文档（C-ATBD）](https://www.ncei.noaa.gov/pub/data/sds/cdr/CDRs/AVHRR-HIRS_Reflectance_PATMOS-x/AlgorithmDescription%20_01B-1c.pdf)。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：1979 年至 2022 年；分辨率：11,132 米。
- 时间范围：1979-01-01 至 2022-01-01

## 分辨率与规格

- 空间分辨率：约 11,132 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| cld_emiss_acha | 11 μm 云发射率，由 ACHA 确定（CDR 变量）。 | 11132 | 11&micro;m |
| cld_height_acha | 使用 ACHA 计算的云高。 | 11132 |  |
| cld_height_uncer_acha | 使用 ACHA 计算的云高不确定性。 | 11132 |  |
| cld_opd_acha | 0.65 μm 云光学厚度，由 ACHA 确定。 | 11132 | 0.65&micro;m |
| cld_opd_dcomp | 0.65 μm 云光学厚度，由 DCOMP 确定（CDR 变量）。 | 11132 | 0.65&micro;m |
| cld_opd_dcomp_unc | 0.65 μm 云光学厚度的不确定性，由 DCOMP 确定。 | 11132 |  |
| cld_press_acha | 使用 ACHA 计算的云顶气压。 | 11132 |  |
| cld_reff_acha | 由 ACHA 确定的云粒子有效半径。 | 11132 |  |
| cld_reff_dcomp | 由 DCOMP 确定的云粒子有效半径（CDR 变量）。 | 11132 |  |
| cld_reff_dcomp_unc | 由 DCOMP 确定的云粒子有效半径的不确定性。 | 11132 |  |
| cld_temp_acha | 使用 ACHA 计算的云顶温度（CDR 变量）。 | 11132 |  |
| cloud_fraction | 在以本像元为中心的原生分辨率 3x3 像元阵列上计算的云分数。 | 11132 |  |
| cloud_fraction_uncertainty | 在 3x3 阵列上计算的云分数不确定性。 | 11132 |  |
| cloud_probability | 来自贝叶斯云掩膜的像元有云概率。 | 11132 |  |
| cloud_transmission_0_65um | DCOMP 的 0.65 μm 云透射率。 | 11132 | 0.65&micro;m |
| cloud_type | 云类型的整数分类，包括晴空与气溶胶类型。 | 11132 |  |
| cloud_water_path | 整个柱积分的总云水。 | 11132 |  |
| land_class | 陆地类别。 | 11132 |  |
| refl_0_65um | 大气顶反射率 0.65 μm（CDR 变量）。 | 11132 | 0.65&micro;m |
| refl_0_65um_counts | 0.65 μm 通道的仪器计数。 | 11132 |  |
| refl_0_65um_stddev_3x3 | 在 3x3 像元阵列上计算的 0.63 μm 反射率的标准差。 | 11132 |  |
| refl_0_86um | 0.86 μm 大气顶反射率（CDR 变量）。 | 11132 | 0.86&micro;m |
| refl_0_86um_counts | 0.86 μm 通道的仪器计数。 | 11132 |  |
| refl_1_60um | 1.60 μm 大气顶反射率（CDR 变量）。 | 11132 | 1.60&micro;m |
| refl_1_60um_counts | 1.60 μm 通道的仪器计数。 | 11132 |  |
| refl_3_75um | 3.75 μm 大气顶反射率（CDR 变量）。 | 11132 | 3.75&micro;m |
| relative_azimuth_angle | 太阳-传感器相对方位角；0 为朝向太阳的主平面。 | 11132 |  |
| scan_element_number | 为纳入二级 b 而选择的像元的扫描元素索引。 | 11132 |  |
| scan_line_number | 扫描线编号。 | 11132 |  |
| scan_line_time | 扫描线时间。 | 11132 |  |
| sensor_zenith_angle | 每个像元的传感器天顶角，以距天底的度数计。 | 11132 |  |
| snow_class | 雪类别与值。 | 11132 |  |
| solar_azimuth_angle | 太阳方位角，以距北的度数计，像元到太阳，正值从北顺时针。 | 11132 |  |
| solar_zenith_angle | 每个像元的太阳天顶角，以距太阳的度数计（0 = 看向太阳）。 | 11132 |  |
| surface_temperature_retrieved | 使用大气校正的 11 μm 辐射反演的地表温度。 | 11132 |  |
| surface_type | UMD 地表类型。 | 11132 |  |
| temp_11_0um | 11.0 μm 大气顶亮温（CDR 变量）。 | 11132 | 11.0&micro;m |
| temp_11_0um_clear_sky | 假设晴空建模的 11.0 μm 大气顶亮温。 | 11132 |  |
| temp_11_0um_stddev_3x3 | 在 3x3 像元阵列上计算的 11.0 μm 亮温的标准差。 | 11132 |  |
| temp_12_0um | 12.0 μm 大气顶亮温（CDR 变量）。 | 11132 | 12.0&micro;m |
| temp_3_75um | 3.75 μm 大气顶亮温（CDR 变量）。 | 11132 | 3.75&micro;m |
| acha_info | ACHA 处理信息位标志。 | 11132 |  |
| acha_quality | ACHA 质量标志。 | 11132 |  |
| bad_pixel_mask | 区分好坏像元的掩膜。 | 11132 |  |
| cloud_mask | 云掩膜的整数分类。 | 11132 |  |
| dcomp_info | DCOMP 的处理标志。 | 11132 |  |
| dcomp_quality | DCOMP 处理信息位标志。 | 11132 |  |
| glint_mask | 耀光掩膜。 | 11132 |  |

## 能拿来做什么

- 云特性气候记录
- 大气辐射研究
- 天气与气候分析

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NOAA/CDR/PATMOSX/V53');
```

- 数据集编号（Earth Engine ID）：`NOAA/CDR/PATMOSX/V53`
- 提供方：NOAA、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_PATMOSX_V53

## 许可与引用

- 许可：proprietary
- 关键词：atmospheric, avhrr, brightness, cdr, climate, cloud, metop, noaa, optical, poes, reflectance, temperature, weather-and-climate
- 数据引用：For the TOA Reflectances and Brightness Temperatures users must cite:
Andrew K. Heidinger, Michael J. Foster, Andi Walther, Xuepeng Zhao, and
NOAA CDR Program (2014): NOAA Climate Data Record (CDR) of Reflectance
and Brightness Temperatures from AVHRR Pathfinder Atmospheres - Extended
(PATMOS-x), Version 5.3. [indicate subset used]. NOAA National Centers for
Environmental Information.
[doi:10.7289/V56W982J](https://doi.org/10.7289/V56W982J)
[access date].

- DOI：10.7289/V5348HCK

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [NOAA CDR GRIDSAT-B1：地球静止红外通道亮温](/pages/a8c34af0/)
- [CPC 全球统一温度](/pages/8042cb38/)
- [CPC 全球统一雨量计逐日降水分析](/pages/9d6b70e8/)
- [ERA5 月聚合数据 — ECMWF 气候再分析](/pages/87085b9b/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
