---
title: "GEDI L4A 地上生物量密度，版本 2.1"
date: 2026-11-03 12:00:00
permalink: /pages/d6d5821d/
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

# GEDI L4A 地上生物量密度，版本 2.1

英文原名：GEDI L4A Aboveground Biomass Density, Version 2.1

## 这是什么数据

本数据集包含全球生态系统动力学调查（GEDI）四级 A（L4A）版本 2 在每个采样的地理定位激光足印内对地上生物量密度（AGBD；单位 Mg/ha）的预测，以及预测标准误的估计。在此版本中，颗粒为子轨道。汇集了与多个区域和植物功能型（PFT）的 AGBD 地面估计关联的模拟波形的高度指标，生成代表世界区域与 PFT 组合（即落叶阔叶树、常绿阔叶树、常绿针叶树、落叶针叶树，以及草地、灌木与林地的组合）的模型的定标数据集。用于 GEDI02_A 版本 2 的算法设置组选择已针对南美洲的常绿阔叶树做了修改，以减少因将地面高程以上的波形模式选为最低模式而产生的假阳性误差。

更多信息见[用户指南](https://daac.ornl.gov/GEDI/guides/GEDI_L4A_AGB_Density_V2_1.html)。

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

- 覆盖范围：覆盖范围：全球北纬 51.6° 至南纬 51.6°；时间范围：2019 年至 2024 年；足印约 25 米。
- 时间范围：2019-04-18 至 2024-11-28

## 分辨率与规格

- 数据类型：table_collection，在 Google Earth Engine 中调用

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| agbd | INT | 预测的地上生物量密度。 |
| agbd_pi_lower | INT | 预测区间下限（水平见 "alpha" 属性）。 |
| agbd_pi_upper | INT | 预测区间上限（水平见 "alpha" 属性）。 |
| agbd_se | INT | 地上生物量密度预测标准误。 |
| agbd_t | INT | 拟合单位下的模型预测。 |
| agbd_t_se | INT | 拟合单位下的模型预测标准误（计算自定义预测区间时需要）。 |
| algorithm_run_flag | INT | 若该标志设为 1，L4A 算法运行。该标志选取具有足够波形保真度供 AGBD 估计的数据。 |
| beam | INT | 波束标识。 |
| channel | INT | 通道标识。 |
| degrade_flag | INT | 指示指向和/或定位信息降级状态的标志。 |
| delta_time | INT | 自 2018 年 1 月 1 日 00:00 起的时间。 |
| elev_lowestmode | INT | 相对于参考椭球的最低模式中心高程。 |
| l2_quality_flag | INT | 标识对生物量预测最有用的 L2 数据的标志。 |
| l4_quality_flag | INT | 简化最有用生物量预测选取的标志。 |
| lat_lowestmode | INT | 最低模式中心的纬度。 |
| lon_lowestmode | INT | 最低模式中心的经度。 |
| master_frac | INT | 主时间，小数部分。master_int+master_frac 等价于 /BEAMXXXX/delta_time。 |
| master_int | INT | 主时间，整数部分。自 master_time_epoch 起的秒数。master_int+master_frac 等价于 /BEAMXXXX/delta_time',。 |
| predict_stratum | STRING | 预测层标识。1 公里单元的预测层名称的字符 ID。 |
| predictor_limit_flag | INT | 预测变量值超出训练数据范围（0=在界内；1=下界；2=上界）。 |
| response_limit_flag | INT | 预测值超出训练数据范围（0=在界内；1=下界；2=上界）。 |
| selected_algorithm | INT | 选定的算法设置组。 |
| selected_mode | INT | 被选为最低非噪声模式的模式 ID。 |
| selected_mode_flag | INT | 指示 selected_mode 状态的标志。 |
| sensitivity | INT | 波束灵敏度。考虑波形信噪比时可穿透的最大冠层覆盖。 |
| solar_elevation | INT | 太阳高度角。 |
| surface_flag | INT | 指示 elev_lowestmode 在数字高程模型（DEM）或平均海面（MSS）高程 300 米以内。 |
| shot_number | STRING | 足印号，唯一标识。该字段格式为 OOOOOBBRRGNNNNNNNN，其中：* OOOOO：轨道号 * BB：波束号 * RR：保留供将来使用 * G：子轨道颗粒号 * NNNNNNNN：足印索引。 |
| shot_number_within_beam | INT | 波束内足印号。 |
| agbd_aN | INT | 地上生物量密度；地理定位纬度 lowestmode。 |
| agbd_pi_lower_aN | INT | 地上生物量密度预测区间下限。 |
| agbd_pi_upper_aN | INT | 地上生物量密度预测区间上限。 |
| agbd_se_aN | INT | 地上生物量密度预测标准误。 |
| agbd_t_aN | INT | 变换空间中的地上生物量密度模型预测。 |
| agbd_t_pi_lower_aN | INT | 变换空间中的预测区间下限。 |
| agbd_t_pi_upper_aN | INT | 变换空间中的预测区间上限。 |
| agbd_t_se_aN | INT | 拟合单位下的模型预测标准误。 |
| algorithm_run_flag_aN | INT | 算法运行标志——若该标志设为 1，该算法运行。该标志选取具有足够波形保真度供 AGBD 估计的数据。 |
| l2_quality_flag_aN | INT | 标识对生物量预测最有用的 L2 数据的标志'。 |
| l4_quality_flag_aN | INT | 简化最有用生物量预测选取的标志。 |
| predictor_limit_flag_aN | INT | 预测变量值超出训练数据范围。 |
| response_limit_flag_aN | INT | 预测值超出训练数据范围。 |
| selected_mode_aN | INT | 被选为最低非噪声模式的模式 ID。 |
| selected_mode_flag_aN | INT | 指示所选模式状态的标志。 |
| elev_lowestmode_aN | INT | 相对于参考椭球的最低模式中心高程。 |
| lat_lowestmode_aN | INT | 最低模式中心的纬度。 |
| lon_lowestmode_aN | INT | 最低模式中心的经度。 |
| sensitivity_aN | INT | 考虑波形信噪比时可穿透的最大冠层覆盖。 |
| stale_return_flag | INT | 来自数字化仪的标志，指示实时脉冲检测算法在整个 10 公里搜索窗口内未检测到超过其检测阈值的回波信号。使用了前一足印的脉冲位置来选取下传波形。 |
| landsat_treecover | INT | 2010 年的树木覆盖，定义为高度超过 5 米的全部植被的冠层郁闭度（Hansen et al., 2013），编码为每个输出网格单元的百分比。 |
| landsat_water_persistence | INT | 2018 年至 2019 年间被分类为地表水的 UMD GLAD Landsat 观测百分比。值 >80 通常代表永久水体，值 <10 代表永久陆地。 |
| leaf_off_doy | INT | GEDI 1 公里 EASE 2.0 网格落叶开始年积日，源自 NPP VIIRS 全球地表物候产品。 |
| leaf_off_flag | INT | GEDI 1 公里 EASE 2.0 网格标志，源自 leaf_off_doy、leaf_on_doy 与 pft_class，指示观测是否记录于落叶针叶或阔叶林与林地的落叶期条件。1=落叶期，0=展叶期。 |
| leaf_on_cycle | INT | 指示展叶观测的植被生长周期的标志。取值为 0=落叶期条件，1=周期 1，2=周期 2。 |
| leaf_on_doy | INT | GEDI 1 公里 EASE 2.0 网格展叶开始年积日，源自 NPP VIIRS 全球地表物候产品。 |
| pft_class | INT | GEDI 1 公里 EASE 2.0 网格植物功能型（PFT），源自 MODIS MCD12Q1v006 产品。取值遵循土地覆盖类型 5 分类方案。 |
| region_class | INT | GEDI 1 公里 EASE 2.0 网格世界大陆区域（0=水体，1=欧洲，2=北亚，3=澳大拉西亚，4=非洲，5=南亚，6=南美洲，7=北美洲）。 |
| urban_focal_window_size | INT | 用于计算 urban_proportion 的焦点窗口大小。取值为 3（3×3 像元窗口）或 5（5×5 像元窗口）。 |
| urban_proportion | INT | 每个足印周围焦点区域内城市土地覆盖的土地面积百分比。城市土地覆盖源自 DLR 12 米分辨率 TanDEM-X 全球城市足迹产品。 |

## 能拿来做什么

- 森林冠层高度与结构分析
- 地上生物量与碳储量估计
- 生态系统三维结构研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('LARSE/GEDI/GEDI04_A_002');
```

- 数据集编号（Earth Engine ID）：`LARSE/GEDI/GEDI04_A_002`
- 提供方：USFS Laboratory for Applications of Remote Sensing in Ecology (LARSE)、NASA GEDI mission, accessed through the USGS LP DAAC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LARSE_GEDI_GEDI04_A_002

## 许可与引用

- 许可：proprietary
- 关键词：elevation, forest-biomass, gedi, larse, nasa, tree-cover, usgs
- 数据引用：GEDI L4A Footprint Level Aboveground Biomass Density, Version 2.1.
Dubayah, R.O., J. Armston, J.R. Kellner, L. Duncanson, S.P. Healey,
P.L. Patterson, S. Hancock, H. Tang, J. Bruening, M.A. Hofton, J.B. Blair,
and S.B. Luthcke. 2022. ORNL DAAC, Oak Ridge, Tennessee, USA.
[doi:10.3334/ORNLDAAC/2056](https://doi.org/10.3334/ORNLDAAC/2056)

- DOI：10.5067/GEDI/GEDI04_A.002

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GEDI L2A Raster Canopy Top Height (Version 2)](/pages/6e0348e1/)
- [GEDI L2A Vector Canopy Top Height (Version 2)](/pages/4874e1f7/)
- [GEDI L2A table index](/pages/81e014ca/)
- [GEDI L2B Raster Canopy Cover Vertical Profile Metrics (Version 2)](/pages/359e6f68/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
