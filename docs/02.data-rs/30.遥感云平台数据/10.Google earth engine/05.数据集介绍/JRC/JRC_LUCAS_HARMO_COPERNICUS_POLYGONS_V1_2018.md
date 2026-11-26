---
title: "LUCAS Copernicus（带属性多边形，2018）V1"
date: 2026-11-03 12:00:00
permalink: /pages/3db665a7/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "copernicus"
  - "eu"
  - "jrc"
  - "landcover"
  - "landuse"
  - "landuse-landcover"
  - "lucas"
  - "table"
---

# LUCAS Copernicus（带属性多边形，2018）V1

英文原名：LUCAS Copernicus (Polygons with attributes, 2018) V1

## 这是什么数据

欧盟的[土地利用/覆盖面积框架调查（LUCAS）](https://ec.europa.eu/eurostat/web/lucas)旨在提供统计信息。它是一项每三年一次的实地土地覆盖与土地利用数据收集工作，范围覆盖整个欧盟领土。LUCAS 收集土地覆盖与土地利用、农业环境变量、土壤与草地方面的信息。这些调查还提供空间信息，用于分析农业、环境与乡村之间的相互影响，如灌溉与土地管理。

这里给出的数据集是 LUCAS Copernicus 模块。它于 2018 年设立，是 LUCAS 历史上首次提供地球观测相关数据。该数据集由 63,287 个大小与形状各异、土地覆盖一致的多边形组成，是从遥感数据进行多边形提取的理想工具。协调化过程把土地覆盖图例改进至 LUCAS 三级（Level-3），并在认为合适之处并入 2018 年 LUCAS 调查的属性数据，把数据提取的可能性扩展到 LUCAS 所收集变量的全部潜力。

表模式说明中的文字 "C1 (Instructions)" 指[本文件](https://jeodpp.jrc.ec.europa.eu/ftp/jrc-opendata/LUCAS/LUCAS_harmonised/3_supporting/LUCAS2018-C1-Instructions.pdf)。

另见 [LUCAS 点数据集](JRC_LUCAS_HARMO_THLOC_V1)。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：欧盟全境；时间范围：2006 年至 2019 年（调查期）；类型：矢量/表格数据。
- 时间范围：2006-02-05 至 2019-03-14

## 分辨率与规格

- 数据类型：矢量/表格（FeatureCollection），在 Google Earth Engine 中调用

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| id | INT | 唯一行标识符。来源：协调化过程添加。 |
| point_id | INT | 8 位唯一点标识符，按 LUCAS 格网的点编号。该点编号可能属于、也可能不属于某一年度的 LUCAS 调查。来源：C1（说明）p.141 §9.1.1。年份：全部。 |
| year | INT | 调查年份。来源：协调化过程添加。年份：全部。 |
| nuts0 | STRING | NUTS 2016 第 0 级。年份：全部。 |
| nuts1 | STRING | NUTS 2016 第 1 级。年份：全部。 |
| nuts2 | STRING | NUTS 2016 第 2 级。年份：全部。 |
| nuts3 | STRING | NUTS 2016 第 3 级。年份：2018。 |
| office_pi | STRING | 该 LUCAS 点是否已在办公室进行照片判读。若为真，则该 point_id 在该年未被调查员实地访问。取值：true、false。来源：C1（说明）p.141 §9.1.1。年份：2015、2018。 |
| ex_ante | STRING | 事前点是实地样本的一部分、原则上必须实地访问的点，尽管事后可能有原因使其无法访问。若为真，则该 point_id 在该年未被调查员访问。取值：true、false。来源：C1（说明）p.16 §8.1、p.141 §9.1.1。年份：2018。 |
| survey_date | STRING | 调查实施日期，格式为 dd/mm/yy。年份：全部。 |
| car_latitude | DOUBLE | 停车位置的纬度（WGS84）。来源：C1（说明）p.141 §9.1.2。年份：2018。 |
| car_ew | STRING | GPS 停车的东西向罗盘设置，用于知道何时给相应坐标加负号。取值：East、West、不相关时为空。年份：2018。 |
| car_longitude | DOUBLE | 停车位置的经度（WGS84）。来源：C1（说明）p.142 §9.1.2。年份：2018。 |
| gps_proj | STRING | GPS 投影。取值：WGS84、无 GPS 信号、不相关时为空。来源：C1（说明）p.142 §9.1.2。年份：全部。 |
| gps_prec | DOUBLE | GPS 接收机给出的平均定位误差（米）。来源：C1（说明）p.142 §9.1.2。年份：全部。 |
| gps_altitude | DOUBLE | 海拔高（米）。来源：C1（说明）p.141 §9.1.1。年份：2009、2012、2015、2018。 |
| gps_lat | DOUBLE | 实际进行观测的位置的 GPS 纬度（WGS84），以度计。来源：C1（说明）p.142 §9.1.2。年份：全部。 |
| gps_ew | STRING | GPS 的东西向编码设置。取值：East、West、不相关时为空。年份：全部。 |
| gps_long | DOUBLE | 实际进行观测的位置的 GPS 经度（WGS84），以度计。来源：C1（说明）p.142 §9.1.2。年份：全部。 |
| obs_dist | DOUBLE | 观测位置与 LUCAS 点之间由 GPS 接收机给出的距离（米）。年份：全部。 |
| obs_direct | STRING | 观测方向。取值：在点上（点被常规观测）；向北看（点位于边界或宽度 <3 m 的小型线状地物时适用"向北看"规则）；向东看（同理适用"向东看"规则）；不相关时为空。来源：C1（说明）p.144 §9.1.4。年份：全部。 |
| obs_type | STRING | 相关点的观测方法。LUCAS 照片按 obs_type 的可用性见 C1（说明）§8.15.3。取值：实地 < 100 m、实地 > 100 m、实地 PI、实地 PI 不可能、超出国境、办公室 PI、海上、（仅 2015）。更多细节见文档。来源：C1（说明）p.142–144 §9.1.4。年份：全部。 |
| letter_group | STRING | 该点被分入的 C3 文档字母组（顶层分类）。来源：协调化过程添加。年份：全部。 |
| lc1 | STRING | 按协调化 C3 分类编码的土地覆盖。编码与标签翻译见[支持文档](https://figshare.com/s/e6cab3bceaa9a2299237)中文件 *c3_legends_new.csv*。来源：协调化 C3 文档。年份：全部。 |
| lc1_label | STRING | 按协调化 C3 文档的土地覆盖标签。编码与标签翻译见[支持文档](https://figshare.com/s/e6cab3bceaa9a2299237)中文件 *c3_legends_new.csv*。来源：协调化 C3 文档。 |
| lc1_spec | STRING | 按协调化 C3 分类编码的土地覆盖物种。编码与标签翻译见[支持文档](https://figshare.com/s/e6cab3bceaa9a2299237)中文件 *c3_legends_new.csv*。来源：协调化 C3 文档。年份：2009、2012、2015、2018。 |
| lc1_spec_label | STRING | 按协调化 C3 文档的土地覆盖物种标签。编码与标签翻译见[支持文档](https://figshare.com/s/e6cab3bceaa9a2299237)中文件 *c3_legends_new.csv*。来源：协调化 C3 文档。 |
| lc1_perc | STRING | 所赋土地覆盖类型（lc1）占地面的百分比。取值：< 10%、10–25%、25–50%、50–75%、> 75%、不相关时为空。此编码仅适用于 2009–2015 年；2018 年该数字表示土地覆盖百分比（0–100）。该变量在 2006 年不存在。年份：2009、2012、2015、2018。 |
| lc2 | STRING | 按协调化 C3 分类编码的土地覆盖。编码与标签翻译见[支持文档](https://figshare.com/s/e6cab3bceaa9a2299237)中文件 *c3_legends_new.csv*。来源：协调化 C3 文档。年份：全部。 |
| lc2_label | STRING | 按协调化 C3 文档的土地覆盖标签。编码与标签翻译见[支持文档](https://figshare.com/s/e6cab3bceaa9a2299237)中文件 *c3_legends_new.csv*。来源：协调化 C3 文档。 |
| lc2_spec | STRING | 按协调化 C3 分类编码的土地覆盖物种。编码与标签翻译见[支持文档](https://figshare.com/s/e6cab3bceaa9a2299237)中文件 *c3_legends_new.csv*。来源：协调化 C3 文档。年份：2009、2012、2015、2018。 |
| lc2_spec_label | STRING | 按协调化 C3 文档的土地覆盖物种标签。编码与标签翻译见[支持文档](https://figshare.com/s/e6cab3bceaa9a2299237)中文件 *c3_legends_new.csv*。来源：协调化 C3 文档。 |
| lc2_perc | STRING | 所赋土地覆盖类型（lc2）占地面的百分比。取值：< 10%、10–25%、25–50%、50–75%、> 75%、不相关时为空。此编码仅适用于 2009–2015 年；2018 年该数字表示土地覆盖百分比（0–100）。该变量在 2006 年不存在。年份：2009、2012、2015、2018。 |
| lu1 | STRING | 按协调化 C3 分类编码的土地利用。编码与标签翻译见[支持文档](https://figshare.com/s/e6cab3bceaa9a2299237)中文件 *c3_legends_new.csv*。来源：协调化 C3 文档。年份：全部。 |
| lu1_label | STRING | 按协调化 C3 文档的土地利用标签。编码与标签翻译见[支持文档](https://figshare.com/s/e6cab3bceaa9a2299237)中文件 *c3_legends_new.csv*。来源：协调化 C3 文档。 |
| lu1_type | STRING | 按协调化 C3 分类编码的土地利用类型。编码与标签翻译见[支持文档](https://figshare.com/s/e6cab3bceaa9a2299237)中文件 *c3_legends_new.csv*。来源：协调化 C3 文档。年份：2015、2018。 |
| lu1_type_label | STRING | 按协调化 C3 文档的土地利用类型标签。编码与标签翻译见[支持文档](https://figshare.com/s/e6cab3bceaa9a2299237)中文件 *c3_legends_new.csv*。来源：协调化 C3 文档。 |
| lu1_perc | STRING | 所赋土地利用类型（lu1）占地面的百分比。取值：< 5%、5–10%、10–25%、25–50%、50–75%、75–90%、> 90%、Not Relevant。此编码仅适用于 2015 年；2018 年该数字表示土地覆盖百分比（0–100）。该变量在 2006、2009、2012 年不存在。年份：2015、2018。 |
| lu2 | STRING | 按协调化 C3 分类编码的土地利用。编码与标签翻译见[支持文档](https://figshare.com/s/e6cab3bceaa9a2299237)中文件 *c3_legends_new.csv*。来源：协调化 C3 文档。年份：全部。 |
| lu2_label | STRING | 按协调化 C3 文档的土地利用标签。编码与标签翻译见[支持文档](https://figshare.com/s/e6cab3bceaa9a2299237)中文件 *c3_legends_new.csv*。来源：协调化 C3 文档。 |
| lu2_type | STRING | 按协调化 C3 分类编码的土地利用类型。编码与标签翻译见[支持文档](https://figshare.com/s/e6cab3bceaa9a2299237)中文件 *c3_legends_new.csv*。来源：协调化 C3 文档。年份：2015、2018。 |
| lu2_type_label | STRING | 按协调化 C3 文档的土地利用类型标签。编码与标签翻译见[支持文档](https://figshare.com/s/e6cab3bceaa9a2299237)中文件 *c3_legends_new.csv*。来源：协调化 C3 文档。 |
| lu2_perc | STRING | 所赋土地利用类型（lu2）占地面的百分比。取值：< 5%、5–10%、10–25%、25–50%、50–75%、75–90%、> 90%、Not Relevant。此编码仅适用于 2015 年；2018 年该数字表示土地覆盖百分比（0–100）。该变量在 2006、2009、2012 年不存在。年份：2015、2018。 |
| parcel_area_ha | STRING | 所调查地块的面积（公顷）。取值：< 0.5、0.5–1、1–10、> 10、不相关时为空。来源：C1（说明）p.50 §8.4.15。年份：2009、2012、2015、2018。 |
| tree_height_maturity | STRING | 树木成熟时的高度。取值：< 5 m、> 5 m、不可识别、不相关时为空。来源：C1（说明）p.147 §9.1.6。年份：2012、2015、2018。 |
| tree_height_survey | STRING | 调查时树木的高度。取值：< 5 m、> 5 m、不可识别、不相关时为空。来源：C1（说明）p.147 §9.1.6。年份：2009、2012、2015、2018。 |
| feature_width | STRING | 地物宽度。取值：< 20 m、> 20 m、不可识别、不相关时为空。来源：C1（说明）p.147 §9.1.6。年份：2009、2012、2015、2018。 |
| lm_stone_walls | STRING | 地块上石墙的存在情况。取值：无、石墙未维护、石墙维护良好、不相关时为空。来源：C1（说明）p.148 §9.1.7。年份：2018。 |
| crop_residues | STRING | 地块上作物残茬的存在情况。取值：true、false。来源：C1（说明）p.51 §8.6。年份：2018。 |
| lm_grass_margins | STRING | 地块上草边的存在情况。取值：无、宽度 < 1 m、宽度 > 1 m、不相关时为空。来源：C1（说明）p.148 §9.1.7。年份：2018。 |
| grazing | STRING | 地块上的放牧迹象。取值：有放牧迹象、无放牧迹象、不相关时为空。来源：C1（说明）p.148 §9.1.8。年份：2009、2012、2015、2018。 |
| special_status | STRING | 地块是否属于任何特别管制区域的一部分。取值：受保护、狩猎、受保护且狩猎、无特殊状态、不相关时为空。来源：C1（说明）p.149 §9.1.8。年份：2012、2015、2018。 |
| lc_lu_special_remark | STRING | 关于土地覆盖/土地利用的任何特别备注。取值：已收割田、已耕/已播、皆伐、过火区、防火带、苗圃、倾倒场、暂时干旱、暂时淹水、无备注、不相关时为空。更多细节见文档。来源：C1（说明）p.149–150 §9.1.8。年份：2012、2015、2018。 |
| cprn_cando | STRING | 该点是否可进行 Copernicus 调查。有关 Copernicus 模块及所创建数据的更多信息见 [d'Andrimont et al, 2021](https://essd.copernicus.org/articles/13/1119/2021/ )。取值：true、false。来源：C1（说明）p.58 §8.8.1、p.150 §9.1.9。年份：2018。 |
| cprn_lc | STRING | Copernicus 点按二级分类方案的土地覆盖。来源：协调化 C3 文档。年份：2018。 |
| cprn_lc_label | STRING | Copernicus 点按二级分类方案的土地覆盖标签。来源：协调化 C3 文档。 |
| cprn_lc1n | DOUBLE | Copernicus 点的土地覆盖向北方向保持相同的延伸距离（米）。来源：C1（说明）p.150 §9.1.9。年份：2018。 |
| cprnc_lc1e | DOUBLE | Copernicus 点的土地覆盖向东方向保持相同的延伸距离（米）。来源：C1（说明）p.150 §9.1.9。年份：2018。 |
| cprnc_lc1s | DOUBLE | Copernicus 点的土地覆盖向南方向保持相同的延伸距离（米）。来源：C1（说明）p.150 §9.1.9。年份：2018。 |
| cprnc_lc1w | DOUBLE | Copernicus 点的土地覆盖向西方向保持相同的延伸距离（米）。来源：C1（说明）p.150 §9.1.9。年份：2018。 |
| cprn_lc1n_brdth | DOUBLE | 向北方向至下一 Copernicus 土地覆盖的宽度（%）。来源：C1（说明）p.150 §9.1.9。年份：2018。 |
| cprn_lc1e_brdth | DOUBLE | 向东方向至下一 Copernicus 土地覆盖的宽度（%）。来源：C1（说明）p.150 §9.1.9。年份：2018。 |
| cprn_lc1s_brdth | DOUBLE | 向南方向至下一 Copernicus 土地覆盖的宽度（%）。来源：C1（说明）p.150 §9.1.9。年份：2018。 |
| cprn_lc1w_brdth | DOUBLE | 向西方向至下一 Copernicus 土地覆盖的宽度（%）。来源：C1（说明）p.150 §9.1.9。年份：2018。 |
| cprn_lc1n_next | STRING | 若向北 50 m 内发生土地覆盖变化（LUCAS 土地覆盖二级），所记录的下一土地覆盖，无论该下一土地覆盖在景观照片上是否可见。宽度小于 3 m 的任何地物不予考虑、不视为土地覆盖变化。来源：协调化 C3 文档。年份：2018。 |
| cprn_lc1s_next | STRING | 若向南 50 m 内发生土地覆盖变化（LUCAS 土地覆盖二级），所记录的下一土地覆盖，无论该下一土地覆盖在景观照片上是否可见。宽度小于 3 m 的任何地物不予考虑、不视为土地覆盖变化。来源：协调化 C3 文档。年份：2018。 |
| cprn_lc1e_next | STRING | 若向东 50 m 内发生土地覆盖变化（LUCAS 土地覆盖二级），所记录的下一土地覆盖，无论该下一土地覆盖在景观照片上是否可见。宽度小于 3 m 的任何地物不予考虑、不视为土地覆盖变化。来源：协调化 C3 文档。年份：2018。 |
| cprn_lc1w_next | STRING | 若向西 50 m 内发生土地覆盖变化（LUCAS 土地覆盖二级），所记录的下一土地覆盖，无论该下一土地覆盖在景观照片上是否可见。宽度小于 3 m 的任何地物不予考虑、不视为土地覆盖变化。来源：协调化 C3 文档。年份：2018。 |
| cprn_urban | STRING | Copernicus 点是否位于城市区域。取值：true、false。来源：C1（说明）p.151 §9.1.10.1。年份：2018。 |
| cprn_impervious_perc | DOUBLE | 不透水表面的百分比。来源：C1（说明）p.151 §9.1.10.1。年份：2018。 |
| inspire_plcc1 | DOUBLE | 针叶树的百分比。来源：C1（说明）p.151 §9.1.10.2。年份：2015、2018。 |
| inspire_plcc2 | DOUBLE | 阔叶树的百分比。来源：C1（说明）p.151 §9.1.10.2。年份：2015、2018。 |
| inspire_plcc3 | DOUBLE | 灌木的百分比。来源：C1（说明）p.151 §9.1.10.2。年份：2015、2018。 |
| inspire_plcc4 | DOUBLE | 草本植物的百分比。来源：C1（说明）p.151 §9.1.10.2。年份：2015、2018。 |
| inspire_plcc5 | DOUBLE | 地衣与苔藓的百分比。来源：C1（说明）p.151 §9.1.10.2。年份：2015、2018。 |
| inspire_plcc6 | DOUBLE | 固结（裸露）表面（如岩石露头）的百分比。来源：C1（说明）p.151 §9.1.10.2。年份：2015、2018。 |
| inspire_plcc7 | DOUBLE | 未固结（裸露）表面（如沙）的百分比。来源：C1（说明）p.151 §9.1.10.2。年份：2015、2018。 |
| inspire_plcc8 | DOUBLE | 所有 INSPIRE 百分比类别之和与 100% 的差。来源：C1（说明）p.151 §9.1.10.2。年份：2015、2018。 |
| eunis_complex | STRING | EUNIS 生境分类。取值：X06、X09、Other、Unknown、不相关时为空。来源：C1（说明）p.152 §9.1.11。年份：2018。 |
| grassland_sample | STRING | 该点是否属于草地模块的一部分。取值：true、false。来源：C1（说明）p.152 §9.1.12。年份：2018。 |

## 能拿来做什么

- 土地覆盖/土地利用地面真值与验证
- 遥感分类训练样本
- 欧盟土地统计

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.FeatureCollection('JRC/LUCAS_HARMO/COPERNICUS_POLYGONS/V1/2018');
```

- 数据集编号（Earth Engine ID）：`JRC/LUCAS_HARMO/COPERNICUS_POLYGONS/V1/2018`
- 提供方：Joint Research Center, Unit D5、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_LUCAS_HARMO_COPERNICUS_POLYGONS_V1_2018

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：copernicus, eu, jrc, landcover, landuse, landuse-landcover, lucas, table
- 数据引用：d'Andrimont, R., Verhegghen, A., Meroni, M., Lemoine, G., Strobl, P.,
Eiselt, B., Yordanov, M., Martinez-Sanchez, L. and van der Velde, M., 2020.
LUCAS Copernicus 2018: Earth Observation relevant in-situ data on land cover
throughout the European Union. Earth System Science Data Discussions, 2020,
pp.1-19.
[doi:10.5194/essd-13-1119-2021](https://doi.org/10.5194/essd-13-1119-2021)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [LUCAS Harmonized (Theoretical Location, 2006-2018) V1](/pages/10c9281e/)
- [CSP 全球人类改造指数（gHM）](/pages/1227f44f/)
- [Dynamic World V1（动态世界）](/pages/a78539ca/)
- [ESA WorldCereal 10 米 v100](/pages/76b102d2/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
