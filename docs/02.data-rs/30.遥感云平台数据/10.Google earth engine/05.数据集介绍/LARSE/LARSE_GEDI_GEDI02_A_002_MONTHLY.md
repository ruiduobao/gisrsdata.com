---
title: "GEDI L2A 栅格冠层顶高度（版本 2）"
date: 2026-11-03 12:00:00
permalink: /pages/6e0348e1/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "elevation"
  - "forest-biomass"
  - "gedi"
  - "larse"
  - "nasa"
  - "tree-cover"
  - "usgs"
---

# GEDI L2A 栅格冠层顶高度（版本 2）

英文原名：GEDI L2A Raster Canopy Top Height (Version 2)

## 这是什么数据

GEDI 的二级 A 地理定位高程与高度指标产品（GEDI02_A）主要由 100 个相对高度（RH）指标组成，它们共同描述 GEDI 收集的波形。

原始 GEDI02_A 产品是一个点表，空间分辨率（平均足印）为 25 米。LARSE/GEDI/GEDI02_A_002_MONTHLY 数据集是原始 GEDI02_A 产品的栅格版本。栅格影像组织为对应月份内各轨道的月度合成。只有根级 RH 值及其关联的质量标志与元数据保留为栅格波段。每个 GEDI02_A_002 栅格有 136 个波段。

更多信息见[用户指南](https://lpdaac.usgs.gov/documents/986/GEDI02_UserGuide_V2.pdf)。

全球生态系统动力学调查 [GEDI](https://gedi.umd.edu/) 任务旨在表征生态系统结构与动力学，以实现对地球碳循环与生物多样性的量化与理解的根本改善。GEDI 仪器安装在国际空间站（ISS）上，以最高分辨率与最密集采样在全球北纬 51.6° 与南纬 51.6° 之间收集地球三维结构数据。GEDI 仪器由三台激光器组成，共产生八条波束地面轨迹，瞬时采样八个约 25 米足印，沿轨间隔约 60 米。

产品 | 说明
:--------------------- | :----------------------------------------------
L2A 矢量 | [LARSE/GEDI/GEDI02_A_002](LARSE_GEDI_GEDI02_A_002)
L2A 月度栅格 | [LARSE/GEDI/GEDI02_A_002_MONTHLY](LARSE_GEDI_GEDI02_A_002_MONTHLY)
L2A 表索引 | [LARSE/GEDI/GEDI02_A_002_INDEX](LARSE_GEDI_GEDI02_A_002_INDEX)
L2B 矢量 | [LARSE/GEDI/GEDI02_B_002](LARSE_GEDI_GEDI02_B_002)
L2B 月度栅格 | [LARSE/GEDI/GEDI02_B_002_MONTHLY](LARSE_GEDI_GEDI02_B_002_MONTHLY)
L2B 表索引 | [LARSE/GEDI/GEDI02_B_002_INDEX](LARSE_GEDI_GEDI02_B_002_INDEX)
L4A 生物量矢量 | [LARSE/GEDI/GEDI04_A_002](LARSE_GEDI_GEDI04_A_002)
L4A 月度栅格 | [LARSE/GEDI/GEDI04_A_002_MONTHLY](LARSE_GEDI_GEDI04_A_002_MONTHLY)
L4A 表索引 | [LARSE/GEDI/GEDI04_A_002_INDEX](LARSE_GEDI_GEDI04_A_002_INDEX)
L4B 生物量 | [LARSE/GEDI/GEDI04_B_002](LARSE_GEDI_GEDI04_B_002)
L4D 填补波形 | [LARSE/GEDI/GEDI04_D_002](LARSE_GEDI_GEDI04_D_002)

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球北纬 51.6° 至南纬 51.6°；时间范围：2019 年至 2025 年；分辨率：25 米。
- 时间范围：2019-03-25 至 2025-07-01

## 分辨率与规格

- 空间分辨率：约 25 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| beam | 波束标识。 | 25 |  |
| degrade_flag | 指示指向和/或定位信息降级状态的标志。* 3X – ADF CHU 解不可用（ST-2）* 4X – 平台姿态 * 5X – 解质量差（滤波协方差大）* 6X – 数据中断（亦含平台姿态间隙）* 7X – ST 1+2 不可用（相近视轴视场）* 8X – ST 1+2+3 不可用 * 9X – ST 1+2+3 与 ISS 均不可用 * X1 – 机动 * X2 – GPS 数据间隙 * X3 – ST 致盲 * X4 – 其他 * X5 – GPS 接收机时钟漂移 * X6 – 机动 & GPS 接收机时钟漂移 * X7 – GPS 数据间隙 & GPS 接收机时钟漂移 * X8 – ST 致盲 & GPS 接收机时钟漂移 * X9 – 其他 & GPS 接收机时钟漂移。 | 25 |  |
| delta_time | 自 2018 年 1 月 1 日 00:00 起的时间增量。 | 25 |  |
| digital_elevation_model | GEDI 足印位置处的 TanDEM-X 高程。 | 25 |  |
| digital_elevation_model_srtm | GEDI 足印位置处的 SRTM 高程。 | 25 |  |
| elev_highestreturn | 相对于参考椭球的最高检测回波高程。 | 25 |  |
| elev_lowestmode | 相对于参考椭球的最低模式中心高程。 | 25 |  |
| elevation_bias_flag | 高程可能受 4bin（约 60 厘米）测距误差影响。 | 25 |  |
| energy_total | 回波波形相对于平均噪声水平的积分计数。 | 25 |  |
| landsat_treecover | 2010 年的树木覆盖，定义为每个输出网格单元内高度超过 5 米的全部植被的冠层郁闭度百分比。 | 25 |  |
| landsat_water_persistence | 被分类为地表水的 UMD GLAD Landsat 观测百分比。 | 25 |  |
| lat_highestreturn | 最高检测回波的纬度。 | 25 |  |
| leaf_off_doy | GEDI 1 公里 EASE 2.0 网格落叶开始年积日。 | 25 |  |
| leaf_off_flag | GEDI 1 公里 EASE 2.0 网格标志。 | 25 |  |
| leaf_on_cycle | 指示展叶观测的植被生长周期的标志。 | 25 |  |
| leaf_on_doy | GEDI 1 公里 EASE 2.0 网格展叶开始年积日。 | 25 |  |
| lon_highestreturn | 最高检测回波的经度。 | 25 |  |
| modis_nonvegetated | 来自 MODIS MOD44B V6 数据的非植被百分比。 | 25 |  |
| modis_nonvegetated_sd | 来自 MODIS MOD44B V6 数据的非植被百分比标准差。 | 25 |  |
| modis_treecover | 来自 MODIS MOD44B V6 数据的树木覆盖百分比。 | 25 |  |
| modis_treecover_sd | 来自 MODIS MOD44B V6 数据的树木覆盖百分比标准差。 | 25 |  |
| num_detectedmodes | rxwaveform 中检测到的模式数。 | 25 |  |
| pft_class | GEDI 1 公里 EASE 2.0 网格植物功能型（PFT）。 | 25 |  |
| quality_flag | 指示波形可能无效的标志（1=有效，0=无效）。 | 25 |  |
| region_class | GEDI 1 公里 EASE 2.0 网格世界大陆区域。 | 25 |  |
| selected_algorithm | 被选为识别最低非噪声模式的算法标识。 | 25 |  |
| selected_mode | 被选为最低非噪声模式的模式标识。 | 25 |  |
| selected_mode_flag | 指示 selected_mode 状态的标志。 | 25 |  |
| sensitivity | 可穿透的最大冠层覆盖。有效范围为 [0, 1]。超出此范围的值可能存在但必须忽略。它们代表噪声与非陆地表面波形。 | 25 |  |
| solar_azimuth | 在局部 ENU 框架中，从激光弹跳点位置出发的太阳位置矢量的方位角。角度从北量起、向东为正。 | 25 |  |
| solar_elevation | 在局部 ENU 框架中，从激光弹跳点位置出发的太阳位置矢量的高度角。角度从东-北平面量起、向上为正。 | 25 |  |
| surface_flag | 指示 elev_lowestmode 在数字高程模型（DEM）或平均海面（MSS）高程 300 米以内。 | 25 |  |
| urban_focal_window_size | 用于计算 urban_proportion 的焦点窗口大小。取值为 3（3×3 像元窗口）或 5（5×5 像元窗口）。 | 25 |  |
| urban_proportion | 每个足印周围焦点区域内城市土地覆盖的土地面积百分比。 | 25 |  |
| orbit_number | 轨道号。 | 25 |  |
| minor_frame_number | 次帧号 0-241()。 | 25 |  |
| shot_number_within_beam | 波束内足印号。 | 25 |  |
| local_beam_azimuth | 在局部 ENU 框架中激光单位指向矢量的方位角（弧度）。角度从北量起、向东为正。 | 25 |  |
| local_beam_elevation | 在局部 ENU 框架中激光单位指向矢量的高度角（弧度）。角度从北量起、向东为正。 | 25 |  |
| rh0 | 0% 处的相对高度指标。 | 25 |  |
| rh1 | 1% 处的相对高度指标。 | 25 |  |
| rh2 | 2% 处的相对高度指标。 | 25 |  |
| rh3 | 3% 处的相对高度指标。 | 25 |  |
| rh4 | 4% 处的相对高度指标。 | 25 |  |
| rh5 | 5% 处的相对高度指标。 | 25 |  |
| rh6 | 6% 处的相对高度指标。 | 25 |  |
| rh7 | 7% 处的相对高度指标。 | 25 |  |
| rh8 | 8% 处的相对高度指标。 | 25 |  |
| rh9 | 9% 处的相对高度指标。 | 25 |  |
| rh10 | 10% 处的相对高度指标。 | 25 |  |
| rh11 | 11% 处的相对高度指标。 | 25 |  |
| rh12 | 12% 处的相对高度指标。 | 25 |  |
| rh13 | 13% 处的相对高度指标。 | 25 |  |
| rh14 | 14% 处的相对高度指标。 | 25 |  |
| rh15 | 15% 处的相对高度指标。 | 25 |  |
| rh16 | 16% 处的相对高度指标。 | 25 |  |
| rh17 | 17% 处的相对高度指标。 | 25 |  |
| rh18 | 18% 处的相对高度指标。 | 25 |  |
| rh19 | 19% 处的相对高度指标。 | 25 |  |
| rh20 | 20% 处的相对高度指标。 | 25 |  |
| rh21 | 21% 处的相对高度指标。 | 25 |  |
| rh22 | 22% 处的相对高度指标。 | 25 |  |
| rh23 | 23% 处的相对高度指标。 | 25 |  |
| rh24 | 24% 处的相对高度指标。 | 25 |  |
| rh25 | 25% 处的相对高度指标。 | 25 |  |
| rh26 | 26% 处的相对高度指标。 | 25 |  |
| rh27 | 27% 处的相对高度指标。 | 25 |  |
| rh28 | 28% 处的相对高度指标。 | 25 |  |
| rh29 | 29% 处的相对高度指标。 | 25 |  |
| rh30 | 30% 处的相对高度指标。 | 25 |  |
| rh31 | 31% 处的相对高度指标。 | 25 |  |
| rh32 | 32% 处的相对高度指标。 | 25 |  |
| rh33 | 33% 处的相对高度指标。 | 25 |  |
| rh34 | 34% 处的相对高度指标。 | 25 |  |
| rh35 | 35% 处的相对高度指标。 | 25 |  |
| rh36 | 36% 处的相对高度指标。 | 25 |  |
| rh37 | 37% 处的相对高度指标。 | 25 |  |
| rh38 | 38% 处的相对高度指标。 | 25 |  |
| rh39 | 39% 处的相对高度指标。 | 25 |  |
| rh40 | 40% 处的相对高度指标。 | 25 |  |

## 能拿来做什么

- 森林冠层高度与结构分析
- 地上生物量与碳储量估计
- 生态系统三维结构研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('LARSE/GEDI/GEDI02_A_002_MONTHLY');
```

- 数据集编号（Earth Engine ID）：`LARSE/GEDI/GEDI02_A_002_MONTHLY`
- 提供方：Rasterization: Google and USFS Laboratory for Applications of Remote Sensing in Ecology (LARSE)、NASA GEDI mission, accessed through the USGS LP DAAC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LARSE_GEDI_GEDI02_A_002_MONTHLY

## 许可与引用

- 许可：proprietary
- 关键词：elevation, forest-biomass, gedi, larse, nasa, tree-cover, usgs
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GEDI L2A Vector Canopy Top Height (Version 2)](/pages/4874e1f7/)
- [GEDI L2A table index](/pages/81e014ca/)
- [GEDI L2B Raster Canopy Cover Vertical Profile Metrics (Version 2)](/pages/359e6f68/)
- [GEDI L2B Vector Canopy Cover Vertical Profile Metrics (Version 2)](/pages/7bed5b79/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
