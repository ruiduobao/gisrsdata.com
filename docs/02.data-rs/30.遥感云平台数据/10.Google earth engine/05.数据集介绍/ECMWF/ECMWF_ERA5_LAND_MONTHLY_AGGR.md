---
title: "ERA5-Land 月聚合数据 — ECMWF 气候再分析"
date: 2026-11-03 12:00:00
permalink: /pages/0889ecdc/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "cds"
  - "climate"
  - "copernicus"
  - "ecmwf"
  - "era5-land"
  - "evaporation"
  - "heat"
  - "lakes"
  - "precipitation"
  - "pressure"
  - "radiation"
  - "reanalysis"
---

# ERA5-Land 月聚合数据 — ECMWF 气候再分析

英文原名：ERA5-Land Monthly Aggregated - ECMWF Climate Reanalysis

## 这是什么数据

ERA5-Land 是一套再分析数据集，相比 ERA5 以更高的分辨率、一致地呈现数十年间陆地变量的演变。ERA5-Land 通过重演 ECMWF ERA5 气候再分析的陆面分量制作而成。再分析利用物理规律，将模式数据与来自世界各地的观测结合成全球完整、一致的数据集。再分析数据可回溯数十年，准确描述过去的气候。本数据集包含 CDS 上提供的全部 50 个变量。

ERA5-Land 数据自 1950 年起提供至距实时三个月。

请查阅 [ERA5-Land「已知问题」一节](https://confluence.ecmwf.int/display/CKB/ERA5-Land%3A+data+documentation)。特别注意，总蒸散的三个分量取值互换如下：

* 变量「Evaporation from bare soil」（mars 参数代码 228101（evabs））的值对应「Evaporation from vegetation transpiration」（mars 参数 228103（evavt））；
* 变量「Evaporation from open water surfaces excluding oceans」（mars 参数代码 228102（evaow））的值对应「Evaporation from bare soil」（mars 参数代码 228101（evabs））；
* 变量「Evaporation from vegetation transpiration」（mars 参数代码 228103（evavt））的值对应「Evaporation from open water surfaces excluding oceans」（mars 参数代码 228102（evaow））。

该资产是 ECMWF ERA5-Land 逐小时资产的月聚合，包含通量与非通量波段。通量波段由取当月每一天次日第一个小时的数据并相加构成，非通量波段由当月全部逐小时数据平均构成。通量波段以「_sum」标识标记；这一做法与哥白尼气候数据存储（CDS）生产的月数据不同——在 CDS 中通量波段也做平均。

月聚合值已预先计算，方便在不需要月以下尺度场时、需要便捷快速访问数据的众多应用。

降水及其他通量（累积）波段偶尔会出现负值，这在物理上没有意义；有时其值又会过高。

这一问题源于 GRIB 格式保存数据的方式：它把数据简化（「打包」）为更小、更不精确的数值，从而引入误差。数据变化越大，误差越严重。

因此，当我们查看一整天的数据来计算逐日总量时，有时会出现某个时刻记录的最大降雨量看上去比全天测得的总降雨量还大的情况。

了解更多，请见：[「为什么降水累积有时会出现小的负值」](https://confluence.ecmwf.int/display/UDOC/Why+are+there+sometimes+small+negative+precipitation+accumulations+-+ecCodes+GRIB+FAQ)

## 覆盖范围与时间

- 覆盖范围：全球陆地
- 时间范围：1950-02-01 至 2026-09-01
- 更新节奏：逐月

## 分辨率与规格

- 空间分辨率：约 11,132 米（约 11 公里格距）
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| dewpoint_temperature_2m | 地球表面上方 2 米处空气冷却到发生饱和时的温度。它是空气湿度的度量。结合气温与气压可计算相对湿度。2 米露点温度由最低模式层与地球表面之间按大气条件插值得到。 | 11132 |  |
| temperature_2m | 陆地、海洋或内陆水体表面上方 2 米处的空气温度。2 米气温由最低模式层与地球表面之间按大气条件插值得到。 | 11132 |  |
| skin_temperature | 地球表面的温度。地表皮肤温度是满足地表能量平衡所需的理论温度，代表最上层表层的温度；该层没有热容量，因而能对表面通量的变化即时响应。陆地与海洋上的皮肤温度计算方法不同。 | 11132 |  |
| soil_temperature_level_1 | ECMWF 综合预报系统中第 1 层（0–7 厘米）土壤的温度。地表位于 0 厘米处。土壤温度取在每层的中部，热量传递在各层界面处计算。假设最下层底部没有热量传出。 | 11132 |  |
| soil_temperature_level_2 | ECMWF 综合预报系统中第 2 层（7–28 厘米）土壤的温度。 | 11132 |  |
| soil_temperature_level_3 | ECMWF 综合预报系统中第 3 层（28–100 厘米）土壤的温度。 | 11132 |  |
| soil_temperature_level_4 | ECMWF 综合预报系统中第 4 层（100–289 厘米）土壤的温度。 | 11132 |  |
| lake_bottom_temperature | 内陆水体（湖泊、水库、河流）与近岸水域底部的水温。ECMWF 于 2015 年 5 月在综合预报系统中实现了一个湖泊模式，用于表示全球所有主要内陆水体的水温与湖冰。该模式保持湖泊深度与表面面积（或覆盖比例）随时间不变。 | 11132 |  |
| lake_ice_depth | 内陆水体（湖泊、水库与河流）与近岸水域上冰的厚度。ECMWF 综合预报系统（IFS）表示内陆水体（湖泊、水库与河流）与近岸水域上冰的形成与融化，采用单一冰层表示。本参数即该冰层的厚度。 | 11132 |  |
| lake_ice_temperature | 内陆水体（湖泊、水库、河流）与近岸水域上冰的最上层表面温度。ECMWF 综合预报系统表示湖泊上冰的形成与融化，采用单一冰层表示。 | 11132 |  |
| lake_mix_layer_depth | 内陆水体（湖泊、水库与河流）或近岸水域最上层的厚度；该层混合良好、温度随深度近似不变（温度均匀分布）。ECMWF 综合预报系统在垂直方向上用两层表示内陆水体：上方为混合层，下方为温跃层。温跃层的上界位于混合层底部，下界位于湖底。当表层（及近表层）水的密度大于其下方水体时，混合层内可发生混合；湖面风的作用也可引起混合。 | 11132 |  |
| lake_mix_layer_temperature | 内陆水体（湖泊、水库与河流）或近岸水域混合良好的最上层的水温。ECMWF 综合预报系统在垂直方向上用两层表示内陆水体：上方为混合层，下方为温跃层。温跃层的上界位于混合层底部，下界位于湖底。当表层（及近表层）水的密度大于其下方水体时，混合层内可发生混合；湖面风的作用也可引起混合。 | 11132 |  |
| lake_shape_factor | 本参数描述内陆水体（湖泊、水库与河流）与近岸水域温跃层内温度随深度的变化方式，用于计算湖底温度及其他湖泊相关参数。ECMWF 综合预报系统在垂直方向上用两层表示内陆与近岸水体：上方为混合层，下方为温度随深度变化的温跃层。 | 11132 |  |
| lake_total_layer_temperature | 内陆水体（湖泊、水库与河流）与近岸水域整层水柱的平均温度。ECMWF 综合预报系统在垂直方向上用两层表示内陆水体：上方为混合层，下方为温度随深度变化的温跃层。本参数是两层的平均。 | 11132 |  |
| snow_albedo | 定义为整个太阳波谱范围内、直接与漫射辐射被积雪反射的比例。它是积雪覆盖格元反射能力的度量。取值在 0 与 1 之间。通常，雪和冰的反射率很高，反照率在 0.8 以上。 | 11132 |  |
| snow_cover | 表示单元格/格箱被积雪占据的比例（0–1）（与 ERA5 的云覆盖字段类似）。 | 11132 |  |
| snow_density | 积雪层内每立方米积雪的质量。ECMWF 综合预报系统（IFS）模式将积雪表示为最上层土壤层之上的一个附加层，积雪可覆盖格箱的全部或部分。 | 11132 |  |
| snow_depth | 地面上积雪厚度的瞬时格箱平均（不含冠层上的积雪）。 | 11132 |  |
| snow_depth_water_equivalent | 格箱积雪覆盖区的积雪深度。其单位为米水当量，即积雪融化并均匀铺展在整个格箱上时水的深度。ECMWF 综合预报系统将积雪表示为最上层土壤层之上的一个附加层，积雪可覆盖格箱的全部或部分。 | 11132 |  |
| snowfall_sum | 累积的、降落到地球表面的总降雪量。它由大尺度大气环流（水平尺度大于约数百米）造成的降雪与对流（较小尺度区域、约 5 公里至数百公里的暖空气上升）造成的降雪组成。如果积雪在该变量累积期间融化，其值会高于雪深。本变量是从预报开始时刻到预报步长结束时刻累积的总水量。所给单位度量的是积雪融化并均匀铺展在格箱上时水的深度。将模式变量与观测对比时需注意：观测往往是时空上某一点的局地值，而不是模式格箱与模式时间步长内的平均。 | 11132 |  |
| snowmelt_sum | 格箱内平均的积雪融化量（要求积雪上的融化量时，用该值除以积雪比例）。本变量从预报开始时刻累积到预报步长结束时刻。 | 11132 |  |
| temperature_of_snow_layer | 本变量给出从地面到雪-气界面的积雪层温度。ECMWF 综合预报系统（IFS）模式将积雪表示为最上层土壤层之上的一个附加层，积雪可覆盖格箱的全部或部分。 | 11132 |  |
| skin_reservoir_content | 植被冠层内和/或土壤上一薄层中的水量，表示树叶截留的雨水以及来自露水的水。格箱能容纳的最大「地表储水量」取决于植被类型，也可能为零。水通过蒸发离开「地表储水层」。 | 11132 |  |
| volumetric_soil_water_layer_1 | ECMWF 综合预报系统中土壤第 1 层（0–7 厘米）的水量（体积）。地表位于 0 厘米处。体积土壤含水量与土壤质地（或分类）、土壤深度及下伏地下水位有关。 | 11132 |  |
| volumetric_soil_water_layer_2 | ECMWF 综合预报系统中土壤第 2 层（7–28 厘米）的水量（体积）。 | 11132 |  |
| volumetric_soil_water_layer_3 | ECMWF 综合预报系统中土壤第 3 层（28–100 厘米）的水量（体积）。 | 11132 |  |
| volumetric_soil_water_layer_4 | ECMWF 综合预报系统中土壤第 4 层（100–289 厘米）的水量（体积）。 | 11132 |  |
| forecast_albedo | 是地球表面反射能力的度量，指整个太阳波谱范围内、直接与漫射太阳（短波）辐射被地球表面反射的比例。取值在 0 与 1 之间。通常，雪和冰的反射率很高，反照率在 0.8 以上；陆地居中，约 0.1 至 0.4；海洋较低，在 0.1 或以下。来自太阳的辐射（太阳辐射或短波辐射）一部分被云和大气中的粒子（气溶胶）反射回太空，一部分被吸收，其余入射到地球表面，其中一部分又被反射，被地表反射的比例取决于反照率。在 ECMWF 综合预报系统（IFS）中，使用一个气候态背景反照率（多年平均的观测值），并由模式在水体、冰和雪上加以修正。反照率常以百分比（%）表示。 | 11132 |  |
| surface_latent_heat_flux_sum | 通过湍流扩散与地表交换的潜热。本变量从预报开始时刻累积到预报步长结束时刻。按模式约定，向下通量为正。 | 11132 |  |
| surface_net_solar_radiation_sum | 到达地球表面的太阳辐射（也称短波辐射，直接与漫射）量减去被地球表面反射的量（由反照率决定）。来自太阳的辐射（太阳辐射或短波辐射）一部分被云和大气中的粒子（气溶胶）反射回太空，一部分被吸收，其余入射到地球表面，其中一部分又被反射。向下太阳辐射与反射太阳辐射之差即为地表净太阳辐射。本变量从预报开始时刻累积到预报步长结束时刻。单位为焦耳每平方米（J m-2）。换算为瓦特每平方米（W m-2）时，应将累积值除以以秒表示的累积时段。ECMWF 对垂直通量的约定是向下为正。 | 11132 |  |
| surface_net_thermal_radiation_sum | 地表净热辐射。从预报开始时刻到预报步长结束时刻的累积场。按模式约定，向下通量为正。 | 11132 |  |
| surface_sensible_heat_flux_sum | 地球表面与大气之间通过湍流空气运动实现的热量传递（但不包括凝结或蒸发引起的任何热传递）。感热通量的大小由地表与上方大气之间的温差、风速与地表粗糙度决定。例如，暖下垫面上方的冷空气会产生从陆地（或海洋）进入大气的感热通量。这是一个单层变量，从预报开始时刻累积到预报步长结束时刻。单位为焦耳每平方米（J m-2）。换算为瓦特每平方米（W m-2）时，应将累积值除以以秒表示的累积时段。ECMWF 对垂直通量的约定是向下为正。 | 11132 |  |
| surface_solar_radiation_downwards_sum | 到达地球表面的太阳辐射（也称短波辐射）量。本变量包含直接辐射与漫射辐射两部分。来自太阳的辐射（太阳辐射或短波辐射）一部分被云和大气中的粒子（气溶胶）反射回太空，一部分被吸收，其余入射到地球表面（即本变量）。在相当好的近似下，本变量是模式中与地表日射计（测量太阳辐射的仪器）测量值相当的量。但将模式变量与观测对比时需注意：观测往往是时空上某一点的局地值，而不是模式格箱与模式时间步长内的平均。本变量从预报开始时刻累积到预报步长结束时刻。单位为焦耳每平方米（J m-2）。换算为瓦特每平方米（W m-2）时，应将累积值除以以秒表示的累积时段。ECMWF 对垂直通量的约定是向下为正。 | 11132 |  |
| surface_thermal_radiation_downwards_sum | 由大气与云发射、到达地球表面的热辐射（也称长波辐射或地面辐射）量。地球表面发射热辐射，其中一部分被大气与云吸收；大气与云同样向各个方向发射热辐射，其中一部分到达地表（即本变量）。本变量从预报开始时刻累积到预报步长结束时刻。单位为焦耳每平方米（J m-2）。换算为瓦特每平方米（W m-2）时，应将累积值除以以秒表示的累积时段。ECMWF 对垂直通量的约定是向下为正。 | 11132 |  |
| evaporation_from_bare_soil_sum | 陆地表面顶部裸土的蒸发量。本变量从预报开始时刻累积到预报步长结束时刻。注意：由于 ECMWF 数据的一个已知问题，该波段的值与 evaporation_from_vegetation_transpiration 波段对应。使用该波段前，建议用户自行验证。 | 11132 |  |
| evaporation_from_open_water_surfaces_excluding_oceans_sum | 来自湖泊、淹没区等地表水储量的蒸发量（不含海洋）。本变量从预报开始时刻累积到预报步长结束时刻。注意：由于 ECMWF 数据的一个已知问题，该波段的值与 evaporation_from_bare_soil 波段对应。使用该波段前，建议用户自行验证。 | 11132 |  |
| evaporation_from_the_top_of_canopy_sum | 冠层顶部截留储水层的蒸发量。本变量从预报开始时刻累积到预报步长结束时刻。 | 11132 |  |
| evaporation_from_vegetation_transpiration_sum | 来自植被蒸腾的蒸发量。其含义与根系吸水相同，即从不同土壤层中提取的水量。本变量从预报开始时刻累积到预报步长结束时刻。注意：由于 ECMWF 数据的一个已知问题，该波段的值与 evaporation_from_open_water_surfaces_excluding_oceans 波段对应。使用该波段前，建议用户自行验证。 | 11132 |  |
| potential_evaporation_sum | 当前 ECMWF 模式中的潜在蒸发（pev）这样计算：再次调用地表能量平衡程序，将植被变量设为「作物/混合农业」，并假设不受土壤水分胁迫。换言之，蒸发按水分充足的农田计算，并假设大气不受这一人为下垫面条件的影响——后者未必总是符合实际。尽管 pev 本意是估计灌溉需水量，但在干旱条件下，干燥空气强迫的蒸发过强，该方法可能给出不切实际的结果。本变量从预报开始时刻累积到预报步长结束时刻。 | 11132 |  |
| runoff_sum | 来自降雨、融雪或土壤深处的水，一部分储存在土壤中；其余的水排出，或在地表流动（地表径流），或在地下流动（地下径流），两者之和简称为「径流」。本变量是从预报开始时刻到预报步长结束时刻累积的总水量。径流的单位为米（深度），即水均匀铺展在格箱上时的深度。将模式变量与观测对比时需注意：观测往往是某一点的局地值，而不是格箱面积内的平均；观测也常用不同的单位，如毫米每天，而不是这里给出的累积米数。径流是土壤中水分可用性的度量，例如可用作干旱或洪水的指标。径流计算方法的更多信息见 IFS 物理过程文档。 | 11132 |  |
| snow_evaporation_sum | 格箱内平均的积雪蒸发量（要求积雪上的通量时，用该值除以积雪比例）。本变量从预报开始时刻累积到预报步长结束时刻。 | 11132 |  |
| sub_surface_runoff_sum | 来自降雨、融雪或土壤深处的水，一部分储存在土壤中；其余的水排出，或在地表流动（地表径流），或在地下流动（地下径流），两者之和简称为「径流」。本变量从预报开始时刻累积到预报步长结束时刻。径流的单位为米（深度），即水均匀铺展在格箱上时的深度。将模式变量与观测对比时需注意：观测往往是某一点的局地值，而不是格箱面积内的平均；观测也常用不同的单位，如毫米每天，而不是这里给出的累积米数。径流是土壤中水分可用性的度量，例如可用作干旱或洪水的指标。径流计算方法的更多信息见 IFS 物理过程文档。 | 11132 |  |
| surface_runoff_sum | 来自降雨、融雪或土壤深处的水，一部分储存在土壤中；其余的水排出，或在地表流动（地表径流），或在地下流动（地下径流），两者之和简称为「径流」。本变量是从预报开始时刻到预报步长结束时刻累积的总水量。径流的单位为米（深度），即水均匀铺展在格箱上时的深度。将模式变量与观测对比时需注意：观测往往是某一点的局地值，而不是格箱面积内的平均；观测也常用不同的单位，如毫米每天，而不是这里给出的累积米数。径流是土壤中水分可用性的度量，例如可用作干旱或洪水的指标。径流计算方法的更多信息见 IFS 物理过程文档。 | 11132 |  |
| total_evaporation_sum | 从地球表面蒸发的水的累积量，包括蒸腾（来自植被）的简化表示，蒸发后成为上方空气中的水汽。本变量从预报开始时刻累积到预报步长结束时刻。ECMWF 综合预报系统的约定是向下通量为正，因此负值表示蒸发、正值表示凝结。 | 11132 |  |
| u_component_of_wind_10m | 10 米风的东向分量，即地球表面上方 10 米高度处空气向东运动的水平速度，单位为米每秒。将本变量与观测对比时需注意：风的观测在小的时空尺度上变化，并受局地地形、植被与建筑影响，而这些在 ECMWF 综合预报系统中仅以平均方式表示。本变量可与 10 米风的 V 分量结合，给出 10 米水平风的速度与方向。 | 11132 |  |
| v_component_of_wind_10m | 10 米风的北向分量，即地球表面上方 10 米高度处空气向北运动的水平速度，单位为米每秒。将本变量与观测对比时需注意：风的观测在小的时空尺度上变化，并受局地地形、植被与建筑影响，而这些在 ECMWF 综合预报系统中仅以平均方式表示。本变量可与 10 米风的 U 分量结合，给出 10 米水平风的速度与方向。 | 11132 |  |
| surface_pressure | 陆地、海洋与内陆水体表面上的大气压强（单位面积上的力）。它度量的是地球表面某固定点所代表区域上方整层气柱的空气重量。地表气压常与气温结合计算空气密度。气压随高度变化强烈，在山区难以看清高低压系统，因此该用途一般使用平均海平面气压而非地表气压。本变量的单位为帕斯卡（Pa）。地表气压常用 hPa 测量，有时以旧单位毫巴 mb 表示（1 hPa = 1 mb = 100 Pa）。 | 11132 |  |
| total_precipitation_sum | 降落到地球表面的液态与固态水的累积量，包括雨和雪。它是大尺度降水（由槽、冷锋等大尺度天气形势产生的降水）与对流降水（当大气低层空气比其上方空气更暖、密度更小而上升时产生的对流降水）之和。降水变量不包括雾、露，也不包括在到达地球表面之前就在大气中蒸发的降水。本变量从预报开始时刻累积到预报步长结束时刻。降水的单位为米（深度），即水均匀铺展在格箱上时的深度。将模式变量与观测对比时需注意：观测往往是时空上某一点的局地值，而不是模式格箱与模式时间步长内的平均。 | 11132 |  |
| leaf_area_index_high_vegetation | 高植被类型单位水平地面面积上绿色叶面积总和的一半。 | 11132 |  |
| leaf_area_index_low_vegetation | 低植被类型单位水平地面面积上绿色叶面积总和的一半。 | 11132 |  |
| dewpoint_temperature_2m_min | dewpoint_temperature_2m 每月的最小值 | 11132 |  |
| dewpoint_temperature_2m_max | dewpoint_temperature_2m 每月的最大值 | 11132 |  |
| temperature_2m_min | temperature_2m 每月的最小值 | 11132 |  |
| temperature_2m_max | temperature_2m 每月的最大值 | 11132 |  |
| skin_temperature_min | skin_temperature 每月的最小值 | 11132 |  |
| skin_temperature_max | skin_temperature 每月的最大值 | 11132 |  |
| soil_temperature_level_1_min | soil_temperature_level_1 每月的最小值 | 11132 |  |
| soil_temperature_level_1_max | soil_temperature_level_1 每月的最大值 | 11132 |  |
| soil_temperature_level_2_min | soil_temperature_level_2 每月的最小值 | 11132 |  |
| soil_temperature_level_2_max | soil_temperature_level_2 每月的最大值 | 11132 |  |
| soil_temperature_level_3_min | soil_temperature_level_3 每月的最小值 | 11132 |  |
| soil_temperature_level_3_max | soil_temperature_level_3 每月的最大值 | 11132 |  |
| soil_temperature_level_4_min | soil_temperature_level_4 每月的最小值 | 11132 |  |
| soil_temperature_level_4_max | soil_temperature_level_4 每月的最大值 | 11132 |  |
| lake_bottom_temperature_min | lake_bottom_temperature 每月的最小值 | 11132 |  |
| lake_bottom_temperature_max | lake_bottom_temperature 每月的最大值 | 11132 |  |
| lake_ice_depth_min | lake_ice_depth 每月的最小值 | 11132 |  |
| lake_ice_depth_max | lake_ice_depth 每月的最大值 | 11132 |  |
| lake_ice_temperature_min | lake_ice_temperature 每月的最小值 | 11132 |  |
| lake_ice_temperature_max | lake_ice_temperature 每月的最大值 | 11132 |  |
| lake_mix_layer_depth_min | lake_mix_layer_depth 每月的最小值 | 11132 |  |
| lake_mix_layer_depth_max | lake_mix_layer_depth 每月的最大值 | 11132 |  |
| lake_mix_layer_temperature_min | lake_mix_layer_temperature 每月的最小值 | 11132 |  |
| lake_mix_layer_temperature_max | lake_mix_layer_temperature 每月的最大值 | 11132 |  |
| lake_shape_factor_min | lake_shape_factor 每月的最小值 | 11132 |  |
| lake_shape_factor_max | lake_shape_factor 每月的最大值 | 11132 |  |
| lake_total_layer_temperature_min | lake_total_layer_temperature 每月的最小值 | 11132 |  |
| lake_total_layer_temperature_max | lake_total_layer_temperature 每月的最大值 | 11132 |  |
| snow_albedo_min | snow_albedo 每月的最小值 | 11132 |  |
| snow_albedo_max | snow_albedo 每月的最大值 | 11132 |  |

## 能拿来做什么

- 月尺度的土壤湿度、径流与蒸散统计
- 干旱与洪涝的月尺度监测
- 陆面变量长序列变化分析

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('ECMWF/ERA5_LAND/MONTHLY_AGGR');
```

- 数据集编号（Earth Engine ID）：`ECMWF/ERA5_LAND/MONTHLY_AGGR`
- 提供方：Monthly Aggregates: Google and Copernicus Climate Data Store、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/ECMWF_ERA5_LAND_MONTHLY_AGGR

## 许可与引用

- 许可：proprietary
- 关键词：cds, climate, copernicus, ecmwf, era5-land, evaporation, heat, lakes, precipitation, pressure, radiation, reanalysis, runoff, snow, soil-water, temperature, vegetation, weather-and-climate, wind
- 数据引用：Mu&ntilde;oz Sabater, J., (2019): ERA5-Land monthly averaged data from 1981
to present. Copernicus Climate Change Service (C3S) Climate Data Store
(CDS). (&lt;date of access&gt;),
[doi:10.24381/cds.68d2bb30](https://doi.org/10.24381/cds.68d2bb30)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ERA5-Land Daily Aggregated - ECMWF Climate Reanalysis](/pages/a05a1bb7/)
- [ERA5-Land Hourly - ECMWF Climate Reanalysis](/pages/0a0b8372/)
- [ERA5-Land Monthly Averaged by Hour of Day - ECMWF Climate Reanalysis](/pages/39c04517/)
- [ERA5-Land Static - ECMWF Climate Reanalysis](/pages/1932ca55/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
