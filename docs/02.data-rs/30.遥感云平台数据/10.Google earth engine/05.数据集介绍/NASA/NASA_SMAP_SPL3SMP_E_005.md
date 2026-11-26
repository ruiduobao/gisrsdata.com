---
title: "SPL3SMP_E.005 SMAP 三级辐射计全球逐日 9 千米土壤水分"
date: 2026-11-03 12:00:00
permalink: /pages/ff73e36e/
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

# SPL3SMP_E.005 SMAP 三级辐射计全球逐日 9 千米土壤水分

英文原名：SPL3SMP_E.005 SMAP L3 Radiometer Global Daily 9 km Soil Moisture

## 这是什么数据

自 2023-12-04 起的数据可在 [NASA/SMAP/SPL3SMP_E/006](NASA_SMAP_SPL3SMP_E_006) 集合中获得。

此三级（L3）土壤水分产品提供由土壤水分主动被动（SMAP）L 波段辐射计反演的全球陆面条件的逐日合成。这里的逐日数据收集自下降（当地太阳时上午 6 点）与上升（当地太阳时下午 6 点）过境。

SMAP 任务是一个轨道观测站，测量地球上各处地表土壤中的水量。详细描述见 [SMAP 手册](https://smap.jpl.nasa.gov/system/internal_resources/details/original/178_SMAP_Handbook_FINAL_1_JULY_2014_Web.pdf)。它于 2015 年 1 月发射，2015 年 4 月开始运行。雷达仪器因雷达电源故障于 2015 年初停止运行，收集了近 3 个月的科学数据。三年主任务阶段于 2018 年完成，此后 SMAP 处于扩展运行阶段。

SMAP 每 2–3 天测量一次土壤水分。这使全球变化能在从大风暴到跨季节重复测量的时间尺度上被观测。

在地球上未被水覆盖或未冻结的各处，SMAP 测量表层土壤中有多少水。它还区分地面是冻结还是融化。在地面未冻结处，SMAP 测量全球各处土壤中矿物、岩石材料与有机颗粒之间发现的水量（SMAP 测量地面表层中的液态水，但不能测量冰）。

SPL3SMP_E 数据在摄入 Google Earth Engine 之前，使用 GDAL 库[转换为地理坐标](https://github.com/google/earthengine-catalog/blob/main/pipelines/smap_convert_l3.py)。

更多文档与算法细节见 [SMAP L3 土壤水分用户指南](https://nsidc.org/sites/default/files/spl3smp_e-v005-userguide.pdf) 及其参考文献。

见 [基础](https://developers.google.com/earth-engine/tutorials/community/smap-soil-moisture) 与 [高级](https://developers.google.com/earth-engine/tutorials/community/anomalies-analysis-smo-and-pre) 教程学习如何在 Earth Engine 中使用 SMAP 数据。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2015 年至 2023 年；分辨率：9,000 米。
- 时间范围：2015-03-31 至 2023-12-03

## 分辨率与规格

- 空间分辨率：约 9,000 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| soil_moisture_am | 从 9 千米格网单元解聚/降尺度的垂直极化亮温反演的土壤水分估计；上午 过境。 | 9000 |  |
| tb_h_corrected_am | 水平极化亮温的加权平均。此值表示水分数低于 0.9 时的校正陆地亮温（否则不施加校正），或水分数大于 0.1 时的校正水亮温（否则不施加校正）；上午 过境。 | 9000 |  |
| tb_v_corrected_am | 垂直极化亮温的加权平均。此值表示水分数低于 0.9 时的校正陆地亮温（否则不施加校正），或水分数大于 0.1 时的校正水亮温（否则不施加校正）；上午 过境。 | 9000 |  |
| vegetation_water_content_am | 9 千米空间尺度的植被含水量。当使用基线算法时，此参数用作 SPL2SMAP 处理软件的输入辅助数据参数。有效最小值与最大值有待进一步分析。上午 过境。 | 9000 |  |
| retrieval_qual_flag_am | 0 = 通过：土壤水分质量可接受；1 = 失败：土壤水分质量不可接受；上午 过境。 | 9000 |  |
| tb_qual_flag_h_am | 0 = 亮温质量不可接受；1 = 亮温质量可接受；上午 过境。 | 9000 |  |
| tb_qual_flag_v_am | 0 = 亮温质量不可接受；1 = 亮温质量可接受；上午 过境。 | 9000 |  |
| soil_moisture_pm | 从 9 千米格网单元解聚/降尺度的垂直极化亮温反演的土壤水分估计；下午 过境。 | 9000 |  |
| tb_h_corrected_pm | 水平极化亮温的加权平均。此值表示水分数低于 0.9 时的校正陆地亮温（否则不施加校正），或水分数大于 0.1 时的校正水亮温（否则不施加校正）；下午 过境。 | 9000 |  |
| tb_v_corrected_pm | 垂直极化亮温的加权平均。此值表示水分数低于 0.9 时的校正陆地亮温（否则不施加校正），或水分数大于 0.1 时的校正水亮温（否则不施加校正）；下午 过境。 | 9000 |  |
| vegetation_water_content_pm | 9 千米空间尺度的植被含水量。当使用基线算法时，此参数用作 SPL2SMAP 处理软件的输入辅助数据参数。有效最小值与最大值有待进一步分析。下午 过境。 | 9000 |  |
| retrieval_qual_flag_pm | 0 = 通过：土壤水分质量可接受；1 = 失败：土壤水分质量不可接受；下午 过境。 | 9000 |  |
| tb_qual_flag_h_pm | 0 = 亮温质量不可接受；1 = 亮温质量可接受；下午 过境。 | 9000 |  |
| tb_qual_flag_v_pm | 0 = 亮温质量不可接受；1 = 亮温质量可接受；下午 过境。 | 9000 |  |
| soil_moisture_am_anomaly | 实验性。以资产日期为中心的 soil_moisture_am 的 30 天平均，相对于 2015 年至今（不包括资产年份）同 30 天时段跨年平均的差。异常计算见[此脚本](https://github.com/google/earthengine-catalog/blob/main/pipelines/smap_convert_l3.py)。 | 9000 |  |
| soil_moisture_pm_anomaly | 实验性。以资产日期为中心的 soil_moisture_pm 的 30 天平均，相对于 2015 年至今（不包括资产年份）同 30 天时段跨年平均的差。异常计算见[此脚本](https://github.com/google/earthengine-catalog/blob/main/pipelines/smap_convert_l3.py)。 | 9000 |  |

## 能拿来做什么

- 全球土壤水分监测
- 干旱监测
- 水文与农业应用

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/SMAP/SPL3SMP_E/005');
```

- 数据集编号（Earth Engine ID）：`NASA/SMAP/SPL3SMP_E/005`
- 提供方：Google and NSIDC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_SMAP_SPL3SMP_E_005

## 许可与引用

- 许可：proprietary
- 关键词：drought, nasa, smap, soil, soil-moisture, surface, weather
- 数据引用：**O'Neill, P. E., S. Chan, E. G. Njoku, T. Jackson, R. Bindlish,
J. Chaubell, and A. Colliander. 2021. SMAP Enhanced L3 Radiometer Global
and Polar Grid Daily 9 km EASE-Grid Soil Moisture, Version 5.
[Indicate subset used]. Boulder, Colorado USA. NASA National Snow and Ice
Data Center Distributed Active Archive Center.
[doi:10.5067/4DQ54OUIJ9DL](https://doi.org/10.5067/4DQ54OUIJ9DL)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [SPL3SMP_E.006 SMAP L3 Radiometer Global Daily 9 km Soil Moisture](/pages/bb174530/)
- [SPL4SMGP.008 SMAP L4 Global 3-hourly 9-km Surface and Root Zone Soil Moisture](/pages/abac2346/)
- [SPL4SMGP.007 SMAP L4 Global 3-hourly 9-km Surface and Root Zone Soil Moisture [deprecated]](/pages/d36e17a5/)
- [SoilGrids250m 2.0 土壤体积含水量](/pages/ec88a629/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
