---
title: "IBTrACS：全球热带气旋最佳路径数据"
date: 2026-11-03 12:00:00
permalink: /pages/d0121e5a/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "hurricane"
  - "noaa"
  - "table"
  - "weather"
  - "weather-and-climate"
---

# IBTrACS：全球热带气旋最佳路径数据

英文原名：International Best Track Archive for Climate Stewardship Project

## 这是什么数据

IBTrACS 项目提供全球热带气旋位置与强度的最完整记录。数据汇集了全球所有热带气旋的可用数据。目前包含 1840 年代至今的热带气旋信息。大多数风暴数据以 3 小时间隔提供，涵盖七大洋盆地：北大西洋（NA）、南大西洋（SA）、东北太平洋（EP）、西北太平洋（WP）、北印度洋（NI）、南印度洋（SI）与南太平洋（SP）。

## 覆盖范围与时间

- 覆盖范围：空间：全球七大洋盆地；时间：1842 年至 2024 年（多为 3 小时间隔）；类型：矢量/表格，无固定分辨率。
- 时间范围：1842-10-25 至 2024-05-19

## 分辨率与规格

- 数据类型：矢量/表格（FeatureCollection），在 Google Earth Engine 中调用

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| SID | STRING | 风暴标识符 |
| SEASON | DOUBLE | 风暴发生的年份 |
| NUMBER | DOUBLE | 该季节内系统的序号。计数涵盖所有洋盆地，因此在单个洋盆地文件中不连续。 |
| BASIN | STRING | 洋盆地包括：NA：北大西洋；EP：东北太平洋；WP：西北太平洋；NI：北印度洋；SI：南印度洋；SP：南太平洋；SA：南大西洋；MM：缺失——不应出现在最终 IBTrACS 产品中 |
| SUBBASIN | STRING | 子洋盆地包括：MM：缺失——该洋盆地无子洋盆地（WP、SI 未提供子洋盆地）；CS：加勒比海；GM：墨西哥湾；CP：中太平洋；BB：孟加拉湾；AS：阿拉伯海；WA：西澳大利亚；EA：东澳大利亚 |
| NAME | STRING | 机构提供的名称 |
| ISO_TIME | STRING | 机构提供的 ISO 时间，世界时（UTC）。格式为 YYYY-MM-DD HH:mm:ss。大多数点以 6 小时间隔提供。部分机构提供 3 小时点（如新德里）或重要观测时刻（如北大西洋的登陆时刻等） |
| NATURE | STRING | 综合风暴类型。基于所有可用的风暴类型赋值。取值：DS：扰动；TS：热带；ET：温带；SS：副热带；NR：未报告；MX：混合（不同机构的性质报告相互矛盾） |
| WMO_WIND | DOUBLE | WMO 机构对当前位置的最大持续风速。未对风速平均时段的差异做调整。hurdat/atcf = 北大西洋——美国迈阿密（NOAA NHC）——1 分钟风速；tokyo = RSMC 东京（JMA）——10 分钟；newdelhi = RSMC 新德里（IMD）——3 分钟；reunion = RSMC 拉留尼汪（MFLR）——10 分钟；bom = 澳大利亚各热带气旋警报中心（珀斯、达尔文、布里斯班）——10 分钟；nadi = RSMC 楠迪（FMS）——10 分钟；wellington = TCWC 惠灵顿（NZMS）——10 分钟 |
| WMO_PRES | DOUBLE | 负责的 WMO 机构赋予的最低中心气压（原文作「agnecy」，系 agency 之误） |
| WMO_AGENCY | STRING | 当前列出的负责该洋盆地的报告机构。需要注意，许多机构直到较近时期才接受 WMO 的正式职责，例如拉留尼汪在 1993 年、IMD 在 1990 年。因此，WMO 机构一词宽松地用于描述当前负责机构。 |
| TRACK_TYPE | STRING | 路径类型。热带风暴之间可相互作用。取值：PROVISIONAL：用实时数据填充该系统的位置等参数。这是临时路径，将在风暴再分析完成后被替换（通常在风暴发生后 2 年内）；PROVISIONAL_spur：实时数据（见上），但由于各输入间位置差异，算法无法确定准确位置。统计风暴时不应计入。PROVISIONAL 数据中应很少出现；MAIN：与风暴系统关联的主路径。已经过一定再分析，质量高于临时数据；spur：通常为与主路径关联的短命路径，常代表系统初期的备选位置，也可代表真实的系统相互作用（如藤原效应）。 |
| DIST2LAND | DOUBLE | 当前位置到陆地的距离。陆地数据集包括所有大陆及面积大于 1400 km^2 的岛屿。距离为当前时刻任意方向上的最近距离。 |
| LANDFALL | DOUBLE | 未来 6 小时内到陆地的最近位置。可视为登陆标志：=0——6 小时内登陆；>0——未来 6 小时内不登陆。计算基于风暴中心（第 9、10 列）。小于 60 海里的值即使系统中心不在陆地上空，也可能已受系统影响。使用与 DIST2LAND 相同的陆地掩膜。 |
| IFLAG | STRING | 插值标志。14 字符标志串，表示各机构报告的来源。取值：_：报告缺失，未提供信息；O：机构提供的原始报告；P：位置经插值（所有变量均经插值/填补，包括强度）；I：位置已提供，但强度变量（及可能的其他变量）经插值/填补；V：位置与强度变量为原始值，但部分变量经插值/填补。14 个字符的顺序对应以下 14 个数据集：1：美国机构（见第 18 列）；2：东京；3：CMA；4：HKO；5：新德里；6：留尼汪；7：BoM；8：楠迪；9：惠灵顿；10：ds824；11：TD9636；12：TD9635；13：Neumann 南半球数据集；14：M.L. Chenoweth 北大西洋历史数据集 |
| USA_AGENCY | STRING | 提供信息的机构文件：代表性的美国机构数据按层级选取——以下列表中第一个在给定时间提供信息的数据集用作 USA_agency。取值：HURDAT_ATL、HURSAT_EPA、ATCF（仅 NA 与 EP 洋盆地）、JTWC_WP、JTWC_IO、JTWC_EP、JTWC_CP、JTWC_SH、CPHC（1966-2003、2008 年由 CPHC 单独提供的文件）、tcvitals——表示数据为初步数据。这些机构一般相互独立，但也有系统在多个来源中提供的情况，此时使用层级最高来源的报告。ATCF 格式信息见：https://www.nrlmry.navy.mil/atcf_web/docs/database/new/abdeck.txt ；HURDAT2 信息见：http://www.nhc.noaa.gov/data/hurdat/hurdat2-format-atlantic.pdf |
| USA_ATCF_ID | STRING | ATCF ID 由美国机构分配，可用于与美国其他气旋相关数据集比对同一风暴。若一场风暴由两条（或更多）ATCF 路径组成，ID 之间以冒号分隔。ATCF ID 格式为 B&lt;bb&gt;&lt;nn&gt;&lt;yyyy&gt;，其中 bb 为洋盆地 ID、nn 为该洋盆地内风暴编号、yyyy 为年份。洋盆地取值：AL：北大西洋；SL：南大西洋；EP：东太平洋；WP：西太平洋；SH：南半球；IO：北印度洋。临时数据还提供其他洋盆地标识：CP：中太平洋；SP：南太平洋；SI：南印度洋；AS：阿拉伯海（北印度洋）；BB：孟加拉湾（北印度洋） |
| USA_LAT | DOUBLE | 美国机构纬度 |
| USA_LON | DOUBLE | 美国机构经度 |
| USA_RECORD | STRING | 记录标识符。取值：C：最接近海岸但未登陆；G：生成；I：气压与风速两方面的强度峰值；L：登陆（系统中心越过海岸线）；P：中心气压最低值；R：气旋快速变化时提供强度细节；S：系统状态变化；T：提供气旋路径（位置）细节；W：最大持续风速 |
| USA_STATUS | STRING | 系统状态。取值：DB：扰动；TD：热带低压；TS：热带风暴；TY：台风；ST：超强台风；TC：热带气旋；HU、HR：飓风；SD：副热带低压；SS：副热带风暴；EX：温带系统；PT：后热带；IN：内陆；DS：消散；LO：低压；WV：东风波；ET：外推；MD：季风低压；XX：未知 |
| USA_WIND | DOUBLE | 美国机构最大持续风速 |
| USA_PRES | DOUBLE | 美国机构最低海平面气压 |
| USA_SSHS | STRING | 基于美国机构风速（美国机构提供 1 分钟风速）的萨菲尔-辛普森飓风等级信息。取值：-5：未知 [XX]；-4：后热带 [EX、ET、PT]；-3：杂类扰动 [WV、LO、DB、DS、IN、MD]；-2：副热带 [SS、SD]；热带系统按风速分级 [TD、TS、HU、TY、TC、ST、HR]，取值：-1：热带低压（W<34）；0：热带风暴（34<W<64）；1：1 级（64<=W<83）；2：2 级（83<=W<96）；3：3 级（96<=W<113）；4：4 级（113<=W<137）；5：5 级（W>=137） |
| USA_R34_NE | DOUBLE | 34 节风圈在东北象限的最大范围 |
| USA_R34_SE | DOUBLE | 34 节风圈在东南象限的最大范围 |
| USA_R34_SW | DOUBLE | 34 节风圈在西南象限的最大范围 |
| USA_R34_NW | DOUBLE | 34 节风圈在西北象限的最大范围 |
| USA_R50_NE | DOUBLE | 50 节风圈在东北象限的最大范围 |
| USA_R50_SE | DOUBLE | 50 节风圈在东南象限的最大范围 |
| USA_R50_SW | DOUBLE | 50 节风圈在西南象限的最大范围 |
| USA_R50_NW | DOUBLE | 50 节风圈在西北象限的最大范围 |
| USA_R64_NE | DOUBLE | 64 节风圈在东北象限的最大范围 |
| USA_R64_SE | DOUBLE | 64 节风圈在东南象限的最大范围 |
| USA_R64_SW | DOUBLE | 64 节风圈在西南象限的最大范围 |
| USA_R64_NW | DOUBLE | 64 节风圈在西北象限的最大范围 |
| USA_POCI | DOUBLE | 最后一条闭合等压线的气压（毫巴），900–1050 mb。非最佳路径（未经再分析） |
| USA_ROCI | DOUBLE | 最后一条闭合等压线的半径，0–999 海里。非最佳路径（未经再分析） |
| USA_RMW | DOUBLE | 最大风速半径，0–999 海里。非最佳路径（未经再分析） |
| USA_EYE | DOUBLE | 风眼直径，0–120 海里。非最佳路径（未经再分析） |
| TOKYO_LAT | DOUBLE | 东京纬度 |
| TOKYO_LON | DOUBLE | 东京经度 |
| TOKYO_GRADE | STRING | 等级。取值：1：未使用；2：热带低压（TD）；3：热带风暴（TS）；4：强热带风暴（STS）；5：台风（TY）；6：温带气旋（L）；7：刚进入日本气象厅（JMA）责任区；8：未使用；9：TS 强度或以上的热带气旋 |
| TOKYO_WIND | DOUBLE | 东京最大持续风速（10 分钟平均时段） |
| TOKYO_PRES | DOUBLE | 东京中心气压 |
| TOKYO_R50_DIR | STRING | 取值：1：东北（NE）；2：东（E）；3：东南（SE）；4：南（S）；5：西南（SW）；6：西（W）；7：西北（NW）；8：北（N）；9：（对称圆形） |
| TOKYO_R50_LONG | DOUBLE | 50 节或以上风速的最长半径 |
| TOKYO_R50_SHORT | DOUBLE | 50 节或以上风速的最短半径 |
| TOKYO_R30_DIR | STRING | 取值：1：东北（NE）；2：东（E）；3：东南（SE）；4：南（S）；5：西南（SW）；6：西（W）；7：西北（NW）；8：北（N）；9：（对称圆形） |
| TOKYO_R30_LONG | DOUBLE | 30 节或以上风速的最长半径 |
| TOKYO_R30_SHORT | DOUBLE | 30 节或以上风速的最短半径 |
| TOKYO_LAND | STRING | 分析时刻后一小时内发生登陆或经过日本列岛时带有此指示符。 |
| CMA_LAT | DOUBLE | 中国气象局纬度 |
| CMA_LON | DOUBLE | 中国气象局经度 |
| CMA_CAT | STRING | 按《热带气旋等级》中国国家标准的强度类别（2006 年 6 月 15 日起使用）。取值：0：弱于热带低压或强度未知；1：热带低压（TD：10.8–17.1 m/s）；2：热带风暴（TS：17.2–24.4 m/s）；3：强热带风暴（STS：24.5–32.6 m/s）；4：台风（TY：32.7–41.4 m/s）；5：强台风（STY：41.5–50.9 m/s）；6：超强台风（SuperTY：≥51.0 m/s）；9：温带气旋（ET）阶段 |
| CMA_WIND | DOUBLE | 气旋中心附近 2 分钟平均最大持续风速（MSW；m/s）。WND = 9 表示 MSW < 10 m/s，WND = 0 表示强度未知。 |
| HKO_LAT | DOUBLE | 香港天文台纬度 |
| HKO_LON | DOUBLE | 美国经度（原文如此，疑为 HKO 经度之误） |
| HKO_CAT | DOUBLE | 2009 年后，在台风之上又分出两种风暴类型，共 7 种：LW（低压）<22 节；TD（热带低压）22–33 节；TS（热带风暴）34–47 节；STS（强热带风暴）48–63 节；T（台风）64–80 节；ST（强台风）81–99 节；SuperT（超强台风）>= 100 节 |
| HKO_WIND | DOUBLE | 香港天文台最大持续风速 |
| HKO_PRES | DOUBLE | 香港天文台最低海平面气压 |
| NEWDELHI_LAT | DOUBLE | 新德里纬度 |
| NEWDELHI_LON | DOUBLE | 新德里经度 |
| NEWDELHI_GRADE | STRING | 扰动类型：低压区：W<17 节；D：低压 17<=W<28；DD：深低压 28<=W<34；CS：气旋风暴 34<=W<48；SCS：强气旋风暴 48<=W<64；VSCS：特强气旋风暴 64<=W<120；SCS：超级气旋风暴 W>=120 节（原文如此，超级气旋风暴仍作 SCS） |
| NEWDELHI_WIND | DOUBLE | 新德里最大持续风速 |
| NEWDELHI_PRES | DOUBLE | 新德里最低海平面气压 |
| NEWDELHI_CI | STRING | 德沃夏克 CI 数 |
| NEWDELHI_DP | DOUBLE | 新德里 DP |
| NEWDELHI_POCI | DOUBLE | 气旋所处环境气压 |
| REUNION_LAT | DOUBLE | 留尼汪纬度 |
| REUNION_LON | DOUBLE | 留尼汪经度 |
| REUNION_TYPE | STRING | 取值：01：热带；扰动（无闭合等压线）；02：风速 <34 节、<17 m/s 且至少一条闭合等压线；03：34–63 节、17–32 m/s；04：>63 节、>32 m/s；05：温带；06：消散；07：副热带气旋（非锋面低压系统，初期为在副热带水域上发展的斜压环流）；08：陆上；09：未知 |
| REUNION_WIND | DOUBLE | 留尼汪最大平均风速 |
| REUNION_PRES | DOUBLE | 留尼汪中心气压 |
| REUNION_TNUM | STRING | 德沃夏克 T 数 |
| REUINION_CI | STRING | 德沃夏克 CI 数（字段名原文作 REUINION_CI） |
| REUNION_RMW | DOUBLE | 最大风速半径 |
| REUNION_R34_NE | DOUBLE | 34 节风圈在东北象限的最大范围 |
| REUNION_R34_SE | DOUBLE | 34 节风圈在东南象限的最大范围 |
| REUNION_R34_SW | DOUBLE | 34 节风圈在西南象限的最大范围 |

## 能拿来做什么

- 做热带气旋气候学统计：频次、强度与路径型态的长期变化分析。
- 为灾害风险评估与保险精算提供历史气旋路径与强度样本。
- 检验数值预报与再分析产品的气旋定位与强度误差。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.FeatureCollection('NOAA/IBTrACS/v4');
```

- 数据集编号（Earth Engine ID）：`NOAA/IBTrACS/v4`
- 提供方：NOAA NCEI、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_IBTrACS_v4

## 许可与引用

- 许可：proprietary
- 关键词：climate, hurricane, noaa, table, weather, weather-and-climate
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CPC 全球统一温度](/pages/8042cb38/)
- [CPC 全球统一雨量计逐日降水分析](/pages/9d6b70e8/)
- [ERA5 月聚合数据 — ECMWF 气候再分析](/pages/87085b9b/)
- [ERA5 逐日聚合数据](/pages/9ae9975a/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
