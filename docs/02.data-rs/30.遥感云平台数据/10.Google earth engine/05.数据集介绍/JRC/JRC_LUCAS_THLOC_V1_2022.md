---
title: "LUCAS THLOC（带属性点，2022）V1"
date: 2026-11-03 12:00:00
permalink: /pages/99e20fc7/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "eu"
  - "jrc"
  - "landcover"
  - "landuse"
  - "landuse-landcover"
  - "lucas"
  - "table"
---

# LUCAS THLOC（带属性点，2022）V1

英文原名：LUCAS THLOC (Points with attributes, 2022) V1

## 这是什么数据

欧盟的[土地利用/覆盖面积框架调查（LUCAS）](https://ec.europa.eu/eurostat/web/lucas)旨在提供统计信息。它是一项每三年一次的实地土地覆盖与土地利用数据收集工作，范围覆盖整个欧盟领土。LUCAS 收集土地覆盖与土地利用、农业环境变量、土壤与草地方面的信息。这些调查还提供空间信息，用于分析农业、环境与乡村之间的相互影响，如灌溉与土地管理。

这里给出的数据集是 LUCAS 调查的 2022 年版本。每个点的位置使用字段 'POINT_LAT' 与 'POINT_LON'，即按 LUCAS 格网规定的 LUCAS 理论位置（THLOC）。更多信息见引用（Citations）。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：欧盟全境；时间：2022 年；类型：矢量/表格数据。
- 时间范围：2022-01-01 至 2022-12-31

## 分辨率与规格

- 数据类型：矢量/表格（FeatureCollection），在 Google Earth Engine 中调用

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| POINT_ID | DOUBLE | LAEA 投影下的理论点位置：前 4 位是 X_LAEA，其他 4 位是 Y_LAEA。 |
| POINT_NUTS0 | STRING | 国家（NUTS 2021 分类）。 |
| POINT_NUTS1 | STRING | 国家下分区（NUTS 2021 分类）。 |
| POINT_NUTS2 | STRING | 地区（NUTS 2021 分类）。 |
| POINT_NUTS3 | STRING | 省（NUTS 2021 分类）。 |
| POINT_ALTITUDE | DOUBLE | 点的高程。 |
| POINT_SOIL | STRING | SOIL 2022 样本。 |
| POINT_EX_ANTE | STRING | 事前（Ex-Ante）点。 |
| PI_EXTENSION | DOUBLE | PI 扩展点。 |
| POINT_COPERNICUS | STRING | COPERNICUS 2022 样本。 |
| POINT_EROSION | STRING | 沟蚀（GULLY EROSION）点。 |
| POINT_SOIL_BULK_0_10 | STRING | SOIL_BULK_0_10 点。 |
| POINT_SOIL_BULK_10_20 | STRING | SOIL_BULK_10_20 点。 |
| POINT_SOIL_BULK_20_30 | STRING | SOIL_BULK_20_30 点。 |
| POINT_SOIL_BIO | STRING | SOIL BIO 点。 |
| POINT_LF | STRING | 景观特征（LANDSCAPE FEATURES）2022 样本。 |
| SURVEY_DATE | STRING | 日期。 |
| SURVEY_OBS_TYPE | STRING | 观测类型。取值：1 实地调查、点可见、≤ 100 m；2 实地调查、点可见、距点 >100 m；3 野外照片判读；4 点不可见、PI 不可能；5 超出国境；6 超出欧盟；7 办公室照片判读。 |
| SURVEY_GPS_PROJ | STRING | GPS 坐标系统。取值：WGS84、信号问题、N.R.。 |
| SURVEY_GPS_ALTITUDE | DOUBLE | GPS 高程（米）。 |
| SURVEY_GPS_PREC | DOUBLE | GPS 精度（米）。 |
| SURVEY_OBS_DIST | DOUBLE | GPS 至点的距离。 |
| SURVEY_OBS_DIRECT | STRING | 观测方向。取值：1 在点上；2 向北；3 向东；4 N.R.。 |
| SURVEY_PARCEL_AREA_HA | STRING | 地块面积（公顷）。取值：1 面积 < 0.1；2 0.1 ≤ 面积 < 0.5；3 0.5 ≤ 面积 < 1；4 1 ≤ 面积 < 10；5 面积 ≥ 10；6 N.R.。 |
| SURVEY_LC1 | STRING | LC1 土地覆盖 1。土地覆盖代码（C3 文档）。PI 情况下，除详细分类外，还可使用聚合分类。 |
| SURVEY_LC1_SPEC | STRING | LC1 作物物种。详细作物物种列表（C3 文档，代码 B00），以及 PI（观测类型 3 或 7）时的"无法评估"选项。 |
| SURVEY_LC1_PERC | DOUBLE | LC1 作物覆盖度（%）。 |
| SURVEY_LC2 | STRING | LC2 土地覆盖 2。土地覆盖代码（C3 文档）。PI 情况下，除详细分类外，还可使用聚合分类。 |
| SURVEY_LC2_SPEC | STRING | LC2 作物物种。详细作物物种列表（C3 文档，代码 B00），以及 PI（观测类型 3 或 7）时的"无法评估"选项。 |
| SURVEY_LC2_PERC | DOUBLE | LC2 作物覆盖度（%）。 |
| SURVEY_TREE_HEIGHT_SURVEY | STRING | 调查时树木（CXX、D10、E10）/作物（B70、B80）的高度。取值：1 < 5 m；2 ≥ 5 m；3 N.R.；4 无法评估。 |
| SURVEY_TREE_HEIGHT_MATURITY | STRING | 成熟时树木（CXX、D10、E10）/作物（B70、B80）的高度。取值：1 < 5 m；2 ≥ 5 m；3 N.R.；4 无法评估。 |
| SURVEY_FEATURE_WIDTH | STRING | 地物宽度。取值：1 < 20 m；2 ≥ 20 m；3 N.R.。 |
| SURVEY_LU1 | STRING | LU1 土地利用 1。土地利用代码（C3 文档）。PI 情况下，除详细分类外，还可使用聚合分类。 |
| SURVEY_LU1_TYPE | STRING | LU1 土地利用类型。详细作物物种列表（C3 文档，代码 U22Xn 与 U315n），以及 PI（观测类型 3 或 7）时的"无法评估"选项。 |
| SURVEY_LU1_PERC | DOUBLE | LU1 覆盖度（%）。 |
| SURVEY_LU2 | STRING | LU2 土地利用 2。土地利用代码（C3 文档）。PI 情况下，除详细分类外，还可使用聚合分类。 |
| SURVEY_LU2_TYPE | STRING | LU2 土地利用类型。详细作物物种列表（C3 文档，代码 U22Xn、U315n），以及 PI（观测类型 3 或 7）时的"无法评估"选项。 |
| SURVEY_LU2_PERC | DOUBLE | LU2 覆盖度（%）。 |
| SURVEY_GRAZING | STRING | 田间放牧迹象（适用于 LC 为 BXX、CXX、DXX、EXX、FXX、HXX 的点）。取值：1 有可见放牧迹象；2 无放牧迹象；3 N.R.。 |
| SURVEY_SPECIAL_STATUS | STRING | 特殊状态。取值：1 受保护；2 狩猎；3 受保护且狩猎；4 无特殊状态；5 N.R.。 |
| SURVEY_LC_LU_SPECIAL_REMARK | STRING | 关于土地覆盖/土地利用的特别备注。取值：1 作物不可识别——田已收割（不复访）；2 作物不可识别——已耕和/或已播（待复访）；3 皆伐；4 过火区；5 防火带；6 苗圃；7 倾倒场；8 当前干旱（河床/湖泊）；9 当前淹水；10 无备注；11 N.R.。 |
| SURVEY_INSPIRE_PLCC1 | DOUBLE | 针叶林树木（%）。 |
| SURVEY_INSPIRE_PLCC2 | DOUBLE | 阔叶林树木（%）。 |
| SURVEY_INSPIRE_PLCC3 | DOUBLE | 灌木（%）。 |
| SURVEY_INSPIRE_PLCC4 | DOUBLE | 草本植物（%）。 |
| SURVEY_INSPIRE_PLCC5 | DOUBLE | 地衣与苔藓（%）。 |
| SURVEY_INSPIRE_PLCC6 | DOUBLE | 固结（裸露）表面（%）。 |
| SURVEY_INSPIRE_PLCC7 | DOUBLE | 未固结（裸露）表面（%）。 |
| SURVEY_WM | STRING | 水管理的存在。取值：1 灌溉；2 潜在灌溉；3 排水；4 灌溉与排水；5 无可见水管理；6 N.R.。 |
| SURVEY_WM_TYPE | STRING | 灌溉类型。取值：1 重力；2 压力：喷灌；3 压力：微灌；4 重力/压力；5 其他/不可识别；6 N.R.。 |
| SURVEY_WM_SOURCE | STRING | 灌溉水源。取值：1 井；2 池塘/湖泊/水库；3 溪流/运河/沟渠；4 泻湖/废水；5 其他/不可识别；6 N.R.。 |
| SURVEY_WM_DELIVERY | STRING | 输水系统。取值：1 运河；2 沟渠；3 管道；4 其他/不可识别；5 N.R.。 |
| SURVEY_SOIL_STD_TAKEN | STRING | 是否采集了标准土壤样本？取值：1 是；2 不可能；3 N.R.。 |
| SURVEY_LM_HEDGE | STRING | 树篱的存在。取值：1 是；2 否；3 N.R.。 |
| SURVEY_SOIL_STONES_PERC | STRING | 表面石块（%，相对于半径 2 米圆形采样区的面积，可能值 0–100）。取值：0–25%、25–50%、50–75%、75–100%。 |
| SURVEY_LM_STONE_WALLS | STRING | 石墙的存在。取值：1 无；2 石墙、未维护；3 石墙、维护良好；4 N.R.。 |
| SURVEY_LM_GRASS_MARGINS | STRING | 草边的存在。取值：1 无；2 草边 ≤ 1 m；3 草边 > 1 m；4 N.R.。 |
| SURVEY_CPRN_LC1N | DOUBLE | 土地覆盖向北的延伸（米）。来源：C1（说明）p.233 §9.1.12。 |
| SURVEY_CPRNC_LC1E | DOUBLE | 土地覆盖向东的延伸（米）。来源：C1（说明）p.233 §9.1.12。 |
| SURVEY_CPRNC_LC1S | DOUBLE | 土地覆盖向南的延伸（米）。来源：C1（说明）p.233 §9.1.12。 |
| SURVEY_CPRNC_LC1W | DOUBLE | 土地覆盖向西的延伸（米）。来源：C1（说明）p.233 §9.1.12。 |
| SURVEY_CPRN_URBAN | STRING | 点是否在城市区域？取值：1 是；2 否；3 N.R.。 |
| SURVEY_TREES_SECONDARY | DOUBLE | 带次生作物或放牧的树木（在扩展的均质样地内）。取值：1 带次生作物、草甸或牧场的栽培树木（X06）；2 带放牧草地、石南灌丛和/或林地植物的森林树木（X09）；3 N.R.。 |
| SURVEY_SOIL_BIO_TAKEN | STRING | 是否采集了生物多样性样本？取值：1 是；2 不可能；3 N.R.。 |
| SURVEY_SOIL_BLK_0_10_TAKEN | STRING | 是否采集了容重（0–10 cm）样本？取值：1 是；2 不可能；3 N.R.。 |
| SURVEY_SOIL_BLK_10_20_TAKEN | STRING | 是否采集了容重（10–20 cm）样本？取值：1 是；2 不可能；3 N.R.。 |
| SURVEY_SOIL_BLK_20_30_TAKEN | STRING | 是否采集了容重（20–30 cm）样本？取值：1 是；2 不可能；3 N.R.。 |
| SURVEY_SOIL_BLK_0_10_CO_P | STRING | 0–10 cm 已取土芯：点上。 |
| SURVEY_SOIL_BLK_0_10_CO_N | STRING | 0–10 cm 已取土芯：北。 |
| SURVEY_SOIL_BLK_0_10_CO_E | STRING | 0–10 cm 已取土芯：东。 |
| SURVEY_SOIL_BLK_0_10_CO_S | STRING | 0–10 cm 已取土芯：南。 |
| SURVEY_SOIL_BLK_0_10_CO_W | STRING | 0–10 cm 已取土芯：西。 |
| SURVEY_SOIL_BLK_10_20_CO_P | STRING | 10–20 cm 已取土芯：点上。 |
| SURVEY_SOIL_BLK_10_20_CO_N | STRING | 10–20 cm 已取土芯：北。 |
| SURVEY_SOIL_BLK_10_20_CO_E | STRING | 10–20 cm 已取土芯：东。 |
| SURVEY_SOIL_BLK_10_20_CO_S | STRING | 10–20 cm 已取土芯：南。 |
| SURVEY_SOIL_BLK_10_20_CO_W | STRING | 10–20 cm 已取土芯：西。 |
| SURVEY_SOIL_BLK_20_30_CO_P | STRING | 20–30 cm 已取土芯：点上。 |
| SURVEY_SOIL_BLK_20_30_CO_N | STRING | 20–30 cm 已取土芯：北。 |

## 能拿来做什么

- 土地覆盖/土地利用地面真值与验证
- 遥感分类训练样本
- 欧盟土地统计

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.FeatureCollection('JRC/LUCAS/THLOC/V1/2022');
```

- 数据集编号（Earth Engine ID）：`JRC/LUCAS/THLOC/V1/2022`
- 提供方：Joint Research Center, Unit D5、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_LUCAS_THLOC_V1_2022

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：eu, jrc, landcover, landuse, landuse-landcover, lucas, table
- 数据引用：Ghassemi, B., Izquierdo-Verdiguier, E., Verhegghen, A. et al.
European Union crop map 2022: Earth observation’s 10-meter dive into
Europe's crop tapestry. Sci Data 11, 1048 (2024).
[doi:10.1038/s41597-024-03884-y](https://doi.org/10.1038/s41597-024-03884-y)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CSP 全球人类改造指数（gHM）](/pages/1227f44f/)
- [Dynamic World V1（动态世界）](/pages/a78539ca/)
- [ESA WorldCereal 10 米 v100](/pages/76b102d2/)
- [ESA WorldCereal 活跃耕地 10 米 v100](/pages/dd6f101f/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
